// Draft, review before launch.

import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Use — ${site.name}`,
  description: `Terms for using the ${site.name} waitlist website.`,
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page max-w-3xl py-16 sm:py-24">
        <h1 className="h-display text-4xl sm:text-5xl">Terms of Use</h1>
        <p className="mt-3 text-sm text-muted">Last updated: September 30, 2026</p>

        <div className="prose-none mt-10 space-y-8 text-[15px] leading-relaxed text-ink">
          <section>
            <p>
              This site lets you join a waitlist for early access to {site.name}, a product that is not yet
              generally available. By submitting your email address, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">The waitlist</h2>
            <p className="mt-3">
              Joining the waitlist does not guarantee you access to {site.name}, a specific invite date, or any
              particular features. We may change, delay, or discontinue the beta at any time.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">This website</h2>
            <p className="mt-3">
              We provide this website "as is," without warranties of any kind. We may update or take down this site
              at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">Your information</h2>
            <p className="mt-3">
              See our{" "}
              <a href="/privacy" className="text-brand-500 underline">
                Privacy Policy
              </a>{" "}
              for how we handle the email address you submit.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">Acceptable use</h2>
            <p className="mt-3">
              Please don&apos;t use this site to submit false information, attempt to disrupt it, or misuse the
              waitlist form.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">Changes</h2>
            <p className="mt-3">
              We may update these terms as the product and site evolve. Continued use of the site after a change
              means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="h-display text-xl">Contact</h2>
            <p className="mt-3">
              Questions about these terms:{" "}
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
