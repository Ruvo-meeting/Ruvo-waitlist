import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const waitlistSignups = pgTable("waitlist_signups", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  source: text("source").notNull().default("unknown"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
