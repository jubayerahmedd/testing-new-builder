/**
 * The site's own words: navigation, home, menu, about, events, gallery and
 * visit-us copy.
 *
 * Edit freely. The community's NAME and LOGO are not here: they come from the
 * platform (`GET /site-api/site`), so a rename in the community dashboard shows up here
 * without a Publish. Use `{name}` in any string below for the community name.
 *
 * NOTE for the owner: menu prices, the opening story, the team names and the
 * reviews below are realistic PLACEHOLDERS so the site reads naturally while
 * you edit it — none of them are real transactions, staff bios or quotes.
 * Replace every `// PLACEHOLDER` block with your own facts before you publish.
 */

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Top navigation. Every href is either a page of THIS site (`/`, `/menu`,
 * `/about`, `/events`, `/gallery`, `/visit`, `/blog`, `/portal`) or an App
 * page (`/login`…) — all plain links. Never point one at a path that is
 * neither.
 */
export const NAV: NavItem[] = [
  {label: 'Home', href: '/'},
  {label: 'Menu', href: '/menu'},
  {label: 'About', href: '/about'},
  {label: 'Events', href: '/events'},
  {label: 'Gallery', href: '/gallery'},
  {label: 'Visit us', href: '/visit'},
  {label: 'Blog', href: '/blog'},
];

/** The home page, top to bottom. Each block is one section; reorder or drop freely. */
export const HOME = {
  hero: {
    eyebrow: 'Sylhet, Bangladesh',
    title: 'Sylheti food, cooked like home',
    body: 'Pach Vai means “five brothers” — the feeling we cook for. Hand-pounded spices, slow bhuna and the hatkora citrus that makes Sylheti food taste like nowhere else. Open around the clock; no reservation needed.',
  },
  // PLACEHOLDER: swap in your own photographs (keep the aspect ratio).
  heroImage: {
    src: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&h=1400&q=80',
    alt: 'A steaming bowl of Sylheti-style biryani garnished with fresh coriander',
  },
  strip: [
    {label: 'Open', value: '24 / 7'},
    {label: 'Bookings', value: 'Walk in anytime'},
    {label: 'Cuisine', value: 'Sylheti & Bangladeshi'},
  ],
  specials: {
    eyebrow: 'From the bhuna pot',
    title: "Today's specials",
    body: 'A handful of the dishes Pach Vai is known for across Sylhet — the full menu has plenty more.',
    items: [
      {
        name: 'Hatkorar Lal Bhuna',
        // PLACEHOLDER: sample price in BDT — replace with your real price.
        price: '৳450',
        badge: 'Signature',
        body: 'Beef, slow-bhuna’d for hours with hatkora — the wild Sylheti citrus — until the gravy turns deep red and the meat falls apart.',
        image: {
          src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&h=600&q=80',
          alt: 'Hatkorar lal bhuna: a deep red beef curry in a metal karahi',
        },
      },
      {
        name: 'Hukoin Shuru',
        price: '৳280',
        badge: 'Signature',
        body: 'Our opening course: sun-dried hukna shutki, slow-cooked with garlic, green chilli and mustard oil the way Sylheti kitchens have always made it.',
        image: {
          src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&h=600&q=80',
          alt: 'A pan of shutki (dried fish) curry with fresh coriander',
        },
      },
      {
        name: 'Sylheti Mutton Khichuri',
        price: '৳380',
        body: 'Soft rice and lentils cooked down with tender mutton, ghee and a short list of whole spices — comfort food for a rainy Sylhet evening.',
        image: {
          src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&h=600&q=80',
          alt: 'A plate of mutton biryani-style rice with lemon wedges',
        },
      },
    ],
  },
  reviews: {
    eyebrow: 'What people say',
    title: 'Regulars tell it best',
    // PLACEHOLDER: these are sample reviews, not real customer quotes.
    items: [
      {
        quote: 'The hatkorar lal bhuna here tastes exactly like my grandmother’s — I drive across the city for it.',
        author: 'Tanvir Ahmed',
        role: 'Regular since 2022',
      },
      {
        quote: 'Open all night and never rushes you out. We ended up here after a wedding at 2am and it was perfect.',
        author: 'Shermin Akhter',
        role: 'Visited for a family dinner',
      },
      {
        quote: 'Best hukoin shuru in Sylhet, hands down. Ask for extra mustard oil.',
        author: 'Rafiq Islam',
        role: 'Local food blogger',
      },
    ],
  },
  cta: {
    title: 'Hungry? We never close.',
    body: 'Pach Vai is open 24 hours a day, every day. Walk in any time, or call ahead if you would rather we had a table ready.',
  },
};

export const MENU = {
  intro: {
    eyebrow: 'The menu',
    title: 'Everything we cook, section by section',
    // Prices are sample figures in Bangladeshi Taka — update them to match yours.
    body: 'Prices are shown in Bangladeshi Taka (৳) and are sample figures — replace them with your real menu before publishing.',
  },
  sections: [
    {
      name: 'Sylheti Specialties',
      note: 'The dishes Pach Vai is named for.',
      items: [
        {name: 'Hatkorar Lal Bhuna', price: '৳450', body: 'Beef slow-bhuna’d with hatkora citrus until the gravy runs deep red.', badge: 'Signature'},
        {name: 'Hukoin Shuru', price: '৳280', body: 'Hukna shutki (dried fish), simmered with garlic, chilli and mustard oil.', badge: 'Signature'},
        {name: 'Sylheti Shatkora Chicken', price: '৳360', body: 'Chicken bhuna brightened with the same citrus, lighter than the beef version.'},
        {name: 'Panta Ilish Plate', price: '৳420', body: 'Fermented rice with fried hilsa, green chilli, onion and mustard oil — a Sylheti breakfast classic served all day.'},
      ],
    },
    {
      name: 'Shutki & Bhorta',
      note: 'Dried fish and mashed sides, the Sylheti way.',
      items: [
        {name: 'Lotkon Shutki Bhuna', price: '৳300', body: 'Dried lotkon fish, slow-cooked with onion, garlic and dry red chilli.'},
        {name: 'Aloo Bhorta', price: '৳90', body: 'Smoky mashed potato with mustard oil, green chilli and onion.'},
        {name: 'Begun Bhorta', price: '৳100', body: 'Fire-roasted aubergine, mashed with garlic and mustard oil.'},
        {name: 'Shutki Bhorta', price: '৳150', body: 'Roasted dried fish, hand-mashed with chilli and onion.'},
      ],
    },
    {
      name: 'Bhuna, Jhol & Curries',
      note: 'Slow-cooked mains, from mild jhol to deep bhuna.',
      items: [
        {name: 'Mutton Rezala', price: '৳520', body: 'Mutton in a mild, yogurt-based gravy with whole spices and fried onion.'},
        {name: 'Chicken Bhuna', price: '৳340', body: 'Bone-in chicken, pan-roasted in a thick onion-tomato masala.'},
        {name: 'Rui Fish Jhol', price: '৳320', body: 'A light, home-style fish curry with potato and turmeric.'},
        {name: 'Beef Tehari', price: '৳300', body: 'Short-grain rice cooked in beef fat and whole spices, served with a single piece of beef.'},
        {name: 'Deshi Murgir Jhol', price: '৳380', body: 'Free-range chicken, simmered slow in a thin, deeply spiced gravy.'},
      ],
    },
    {
      name: 'Rice, Biryani & Khichuri',
      items: [
        {name: 'Sylheti Mutton Khichuri', price: '৳380', body: 'Rice and lentils cooked down with tender mutton and ghee.'},
        {name: 'Kacchi Biryani', price: '৳420', body: 'Mutton and basmati rice, layered and sealed to cook together slowly.'},
        {name: 'Plain Polao', price: '৳120', body: 'Fragrant short-grain rice cooked in ghee — the side for any bhuna.'},
        {name: 'Steamed White Rice', price: '৳60', body: 'A simple bowl of steamed rice.'},
      ],
    },
    {
      name: 'From the Tawa',
      note: 'Fresh breads, made to order.',
      items: [
        {name: 'Porota', price: '৳25', body: 'Flaky, pan-fried flatbread.'},
        {name: 'Butter Naan', price: '৳60', body: 'Baked to order, brushed with ghee.'},
        {name: 'Luchi (set of 4)', price: '৳80', body: 'Puffed, deep-fried flatbread — a weekend breakfast favourite.'},
      ],
    },
    {
      name: 'Drinks, Lassi & Tea',
      items: [
        {name: 'Sylheti Shada Cha', price: '৳40', body: 'Seven-colour tea’s quieter cousin: plain Sylheti white tea.'},
        {name: 'Lebu Cha', price: '৳40', body: 'Hot lemon tea, served strong.'},
        {name: 'Mango Lassi', price: '৳120', body: 'Yogurt blended with ripe mango.'},
        {name: 'Borhani', price: '৳100', body: 'A spiced, minty yogurt drink — the traditional partner to biryani.'},
      ],
    },
    {
      name: 'Something Sweet',
      items: [
        {name: 'Shemai', price: '৳90', body: 'Sweet vermicelli, slow-cooked in milk.'},
        {name: 'Roshmalai', price: '৳140', body: 'Soft cheese dumplings in sweetened, cardamom-scented milk.'},
        {name: 'Mishti Doi', price: '৳80', body: 'Set sweet yogurt, caramelised dark.'},
      ],
    },
  ],
};

export const ABOUT = {
  title: 'About Pach Vai',
  lede: 'Five brothers, one kitchen, and the recipes Sylhet grew up on.',
  // PLACEHOLDER: replace with your real opening story, year and founders.
  story: {
    heading: 'Our story',
    paragraphs: [
      'Pach Vai — “five brothers” — opened in Sylhet with one idea: cook the food we grew up eating, at the pace it deserves. Bhuna that takes hours, hukna shutki soaked and simmered the old way, hatkora picked at the right week of the year.',
      'We never close. Buses arrive in Sylhet at every hour, and so do people who are hungry for something that tastes like home — a wedding party at midnight, a long-haul driver at 4am, a family after Friday prayers. The pots stay on.',
    ],
  },
  values: {
    heading: 'What we care about',
    items: [
      {title: 'Slow-cooked, not fast', body: 'Bhuna and rezala are cooked for hours, not minutes. We would rather you wait a little than taste a shortcut.'},
      {title: 'Sourced from home', body: 'Hatkora, shutki and spices come from the same Sylheti suppliers our family has used for years.'},
      {title: 'Open to everyone', body: 'Large families, solo diners, early flights and late shifts — the door is open and the kitchen is on.'},
    ],
  },
  team: {
    heading: 'Meet the kitchen',
    // PLACEHOLDER: swap in your real team, names and photos.
    body: 'The people behind every plate that leaves the pass.',
    members: [
      {
        name: 'Abdul Kashem',
        role: 'Head Chef',
        photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&h=400&q=80',
      },
      {
        name: 'Rubel Hossain',
        role: 'Sous Chef, Bhuna Section',
        photo: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=400&h=400&q=80',
      },
      {
        name: 'Faruk Mia',
        role: 'Floor Manager',
        photo: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=400&h=400&q=80',
      },
    ],
  },
  cta: {
    title: 'Come taste it yourself',
    body: 'No booking needed — we are open 24 hours, every day of the week.',
  },
};

export const EVENTS = {
  eyebrow: 'Events & private dining',
  title: 'Gatherings, done the Pach Vai way',
  lede: 'A private room for family gatherings, office lunches and milad mahfils, with the same bhuna and biryani served at the tables outside.',
  // PLACEHOLDER: swap in your own photos of the private dining space.
  image: {
    src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=1200&h=900&q=80',
    alt: 'A long table set for a private group dinner',
  },
  offerings: [
    {
      title: 'Family & milestone gatherings',
      body: 'Aqiqahs, birthdays and reunions for 15–60 guests, with a set menu built around our bhuna and biryani.',
    },
    {
      title: 'Office & corporate lunches',
      body: 'Boxed or buffet-style lunches for nearby offices, ordered ahead and ready when your team arrives.',
    },
    {
      title: 'Milad mahfils & community meals',
      body: 'Large-format khichuri, tehari and biryani, cooked to serve a crowd at a set time.',
    },
  ],
  included: [
    'A private dining room, seated or floor-style on request',
    'A set menu agreed in advance, or à la carte for smaller groups',
    'Halal throughout, as the whole menu is',
    'Flexible timing — we are open 24 hours, including early morning events',
  ],
  form: {
    heading: 'Tell us about your event',
    body: 'Share a few details and someone from Pach Vai will call you back to confirm.',
  },
};

export const GALLERY = {
  eyebrow: 'Gallery',
  title: 'A look inside Pach Vai',
  lede: 'The dining room, the pass, and the dishes that keep people coming back at every hour.',
  // PLACEHOLDER: replace every photo with your own.
  photos: [
    {src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&h=1100&q=80', alt: 'Hatkorar lal bhuna in a metal karahi', tall: true},
    {src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&h=700&q=80', alt: 'A plate of biryani-style rice with lemon'},
    {src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&h=700&q=80', alt: 'Fresh samosas on a wooden board'},
    {src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&h=1100&q=80', alt: 'A pan of shutki curry with fresh coriander', tall: true},
    {src: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&h=700&q=80', alt: 'A bowl of Sylheti-style biryani'},
    {src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&h=700&q=80', alt: 'Tandoori chicken on a sizzling plate'},
    {src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&h=1100&q=80', alt: 'A rack of grilled ribs with sides', tall: true},
    {src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&h=700&q=80', alt: 'A long table set for a group dinner'},
    {src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&h=700&q=80', alt: 'A full Sylheti thali plate'},
  ],
};

export const VISIT = {
  eyebrow: 'Visit us',
  title: 'Find us in Sylhet',
  lede: 'Open 24 hours a day — walk in any time, or call ahead if you would like a table waiting.',
  // PLACEHOLDER: replace with your real address, phone and map pin.
  address: {
    line1: 'Pach Vai Restaurant',
    line2: 'Zindabazar Road, Sylhet 3100, Bangladesh',
    phone: '+880 1700-000000',
    phoneHref: 'tel:+8801700000000',
    mapsQuery: 'Zindabazar, Sylhet, Bangladesh',
  },
  hours: [
    {day: 'Everyday', time: 'Open 24 hours'},
  ],
  // PLACEHOLDER: your own dining-room photo.
  image: {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&h=900&q=80',
    alt: 'The dining room at Pach Vai',
  },
};

/** Fill `{name}` with the community name. */
export function withName(text: string, name: string): string {
  return text.replaceAll('{name}', name);
}
