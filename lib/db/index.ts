import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// No DATABASE_URL: db is null and callers fall back to logging (see app/api/waitlist/route.ts).
export const db = process.env.DATABASE_URL
  ? drizzle(neon(process.env.DATABASE_URL), { schema })
  : null;
