// Draft, review before launch.
// This page describes what the site actually does today. Update it if data
// handling changes (new provider, new data collected, etc.) before shipping.

import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects and uses the information you give us on this waitlist site.`,
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page max-w-3xl py-16 sm:py-24">
        <h1 className="h-display text-4xl sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: September 30, 2026</p>

        <div className="prose-none mt-10 space-y-8 text-[15px] leading-relaxed text-ink">
          <section>
            <p>
              {site.name} ("we", "us") operates this website to let people join a waitlist for early access to our
              product. This policy explains what information we collect on this site, why, and how you can control
              it. We keep this short and plain on purpose &mdash; if anything here is unclear, email us at{" "}
              <a href={`mailto:${site.contactEmail}`} className="text-brand-500 underline">
                {site.contactEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">What we collect</h2>
            <p className="mt-3">
              When you join the waitlist, we collect the email address you submit. We don&apos;t collect your name,
              payment details, or any other personal information through this site, and we don&apos;t use tracking
              cookies or analytics that identify you individually.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">How we use it</h2>
            <p className="mt-3">We use your email address only to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Let you know when a beta invite is available to you, and</li>
              <li>Send occasional product updates related to {site.name}.</li>
            </ul>
            <p className="mt-3">We don&apos;t sell your email address or share it with third parties for marketing.</p>
          </section>

          <section>
            <h2 className="h-display text-xl">Where it&apos;s stored</h2>
            <p className="mt-3">
              Your email address is stored with our database and email providers, who process it on our behalf under
              their own security and privacy commitments. We keep only what&apos;s needed to run the waitlist and
              contact you about your invite.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">Your choices</h2>
            <p className="mt-3">
              You can ask us to remove your email address from the waitlist, or unsubscribe from updates, at any
              time by emailing{" "}
              <a href={`mailto:${site.contactEmail}`} className="text-brand-500 underline">
                {site.contactEmail}
              </a>
              . We&apos;ll action the request promptly.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">For Canadian visitors</h2>
            <p className="mt-3">
              For visitors in Canada, we aim to handle your information in line with the Personal Information
              Protection and Electronic Documents Act (PIPEDA): we collect only what we need for the purpose stated
              above, we don&apos;t use it for anything else without telling you, and you can request access to or
              deletion of your information by contacting us. We have not sought any privacy certification, and this
              statement describes our current practices rather than a certified or audited program.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">Changes to this policy</h2>
            <p className="mt-3">
              If how we handle your information changes in a meaningful way, we&apos;ll update this page and change
              the date above.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">Contact</h2>
            <p className="mt-3">
              Questions about this policy or your data: {" "}
              <a href={`mailto:${site.contactEmail}`} className="text-brand-500 underline">
                {site.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
