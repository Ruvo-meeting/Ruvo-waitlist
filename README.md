# Ruvo — waitlist landing page

Next.js 15 (App Router) + Tailwind 3.4 + TypeScript.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Waitlist signups

The form posts to `app/api/waitlist/route.ts`, which stores signups in Neon Postgres via Drizzle ORM
(`lib/db/schema.ts`). Duplicate emails are ignored (no error, no second row). The form also has a hidden
honeypot field (`company`) — submissions that fill it are silently dropped.

- **No `DATABASE_URL` set:** signups are validated and logged to the server console. Good for local dev,
  no setup required.
- **Production:**
  1. Create a free Postgres database at [neon.tech](https://neon.tech) and copy its pooled connection
     string.
  2. Copy `.env.example` to `.env.local` and set `DATABASE_URL` to that connection string.
  3. Run the migration to create the `waitlist_signups` table:
     ```bash
     npm run db:generate   # generates SQL from lib/db/schema.ts into ./drizzle
     npm run db:migrate    # applies it to the database at DATABASE_URL
     ```
  4. Set `DATABASE_URL` in your hosting provider's environment variables too.

## Brand

- Colors are sampled from the wordmark and live in `tailwind.config.ts` (`plum`, `brand`, `pink`, `coral`).
- `.bg-ruvo` / `.text-ruvo` in `app/globals.css` apply the wordmark gradient.
- `components/Logo.tsx` renders the wordmark as live gradient text (crisp, transparent background).
  The original artwork is in `public/ruvo-logo.png`. If you get an SVG export, swap it into `Logo.tsx`.
- Favicon: `app/icon.svg`.

## Structure

```
app/page.tsx            sections: hero, features, review, how it works, privacy, final CTA, footer
components/HeroMock.tsx illustrative Meet + side panel mock (pure CSS, no images)
components/ReviewMock.tsx post-meeting review page mock
components/WaitlistForm.tsx client form with loading / success / error states
```

## Before launch

- Footer links point to `/privacy` and `/terms`. Add those pages (a waitlist collects emails, so you need a privacy policy).
- Beta date in the hero badge ("Early 2027") is a placeholder.
- Add a testimonials section once you have real quotes from beta users.
