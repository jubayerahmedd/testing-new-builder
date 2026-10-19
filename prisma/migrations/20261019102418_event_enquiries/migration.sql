-- Wrapped in one transaction: if any statement fails, none of them apply
-- and the live site keeps its old schema (see AGENTS.md).
BEGIN;

-- CreateTable
CREATE TABLE "event_enquiries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "email" VARCHAR(254),
    "message" VARCHAR(2000) NOT NULL,
    "status" VARCHAR(12) NOT NULL DEFAULT 'new',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_enquiries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "event_enquiries_status_id_idx" ON "event_enquiries"("status", "id");

COMMIT;
