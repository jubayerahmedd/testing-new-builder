import {Hono} from 'hono';
import {validator} from 'hono/validator';

import type {EventEnquiriesPage, EventEnquiry} from '../../lib/types';
import {problem, requireMember, requirePermission, withDb, withViewer} from '../../platform/guards';
import {CODENAMES} from '../../platform/permissions';

/**
 * Private-dining / event enquiries from `/events`, stored in the Site
 * Database (table `event_enquiries`). Anyone may send one (no sign-in
 * needed, like a contact form); site admins read and action them from
 * `/portal/enquiries`.
 *
 *   POST /site-api/events                 submit an enquiry (public)
 *   GET  /site-api/events?before=         every enquiry, newest first   (admin)
 *   PATCH /site-api/events/:id            set status (new / contacted)  (admin)
 *
 * Lists are keyset-paged (`?before=<id>`, 20 a page, no count).
 */

/** Who may read and action enquiries: the community's site admins. */
export const MANAGE_EVENTS = CODENAMES.SITE_UPDATE;

const PAGE_SIZE = 20;

const select = {
  id: true,
  name: true,
  phone: true,
  email: true,
  message: true,
  status: true,
  createdAt: true,
} as const;

const cursorOf = (value: unknown) => {
  const n = Number(value);
  return Number.isSafeInteger(n) && n > 0 ? n : undefined;
};

const listQuery = validator('query', value => ({
  before: typeof value.before === 'string' ? value.before : undefined,
}));

/** An https:// address, nothing else: never a `javascript:` or `data:` link. */
function safeEmail(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed.slice(0, 254) : null;
}

const enquiryBody = validator('json', (value, c) => {
  const v = (value ?? {}) as Record<string, unknown>;
  // A hidden field real visitors never fill in; a bot usually does.
  if (typeof v.company === 'string' && v.company.trim()) {
    return c.json(problem('invalid_enquiry', 'Something went wrong. Please try again.'), 422);
  }
  const name = typeof v.name === 'string' ? v.name.trim() : '';
  if (!name || name.length > 100) {
    return c.json(problem('invalid_enquiry', 'Enter your name (up to 100 characters).'), 422);
  }
  const phone = typeof v.phone === 'string' ? v.phone.trim() : '';
  if (!phone || phone.length > 30) {
    return c.json(problem('invalid_enquiry', 'Enter a phone number we can reach you on.'), 422);
  }
  const message = typeof v.message === 'string' ? v.message.trim() : '';
  if (message.length < 10 || message.length > 2000) {
    return c.json(problem('invalid_enquiry', 'Tell us a little about your event (at least 10 characters).'), 422);
  }
  if (v.email !== undefined && v.email !== '' && safeEmail(String(v.email)) === null) {
    return c.json(problem('invalid_enquiry', 'Enter a valid email address, or leave it blank.'), 422);
  }
  return {
    name,
    phone,
    message,
    email: typeof v.email === 'string' ? safeEmail(v.email) : null,
  };
});

export const eventRoutes = new Hono()
  .post('/', enquiryBody, withDb, async c => {
    const input = c.req.valid('json');
    await c.var.db.eventEnquiry.create({data: {...input, status: 'new'}});
    return c.json({ok: true}, 201);
  })

  .get('/', listQuery, withViewer, requireMember, requirePermission(MANAGE_EVENTS), withDb, async c => {
    const cursor = cursorOf(c.req.valid('query').before);
    const rows = await c.var.db.eventEnquiry.findMany({
      select,
      where: cursor ? {id: {lt: cursor}} : undefined,
      orderBy: {id: 'desc'},
      take: PAGE_SIZE + 1,
    });
    const enquiries = rows.slice(0, PAGE_SIZE);
    const page: EventEnquiriesPage = {
      enquiries: enquiries.map(row => ({...row, createdAt: row.createdAt.toISOString()})),
      nextBefore: rows.length > PAGE_SIZE ? enquiries.at(-1)!.id : null,
    };
    return c.json(page);
  })

  .patch('/:id', withViewer, requireMember, requirePermission(MANAGE_EVENTS), withDb, async c => {
    const id = cursorOf(c.req.param('id'));
    const body = (await c.req.json().catch(() => null)) as {status?: string} | null;
    if (body?.status !== 'new' && body?.status !== 'contacted') {
      return c.json(problem('invalid_enquiry', 'Status is new or contacted.'), 422);
    }
    const found = id ? await c.var.db.eventEnquiry.findUnique({where: {id}, select: {id: true}}) : null;
    if (!found) return c.json(problem('not_found', 'No such enquiry.'), 404);
    const row = await c.var.db.eventEnquiry.update({
      where: {id: found.id},
      data: {status: body.status},
      select,
    });
    const enquiry: EventEnquiry = {...row, createdAt: row.createdAt.toISOString()};
    return c.json({enquiry});
  });
