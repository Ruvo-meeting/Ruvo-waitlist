import HeroMock from "@/components/HeroMock";
import ReviewMock from "@/components/ReviewMock";
import WaitlistForm from "@/components/WaitlistForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const features = [
  {
    title: "Knows who's in the room",
    body: "Ruvo reads the invite from Google Calendar and watches who actually joins, so you see names, roles and context for every face on the call.",
    icon: (
      <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-12 10a8 8 0 0 1 16 0" />
    ),
  },
  {
    title: "Captures every word",
    body: "Live captions become a clean, speaker-labelled transcript as the meeting happens. No bot joins the call, and no one has to take notes.",
    icon: <path d="M4 6h16M4 12h10M4 18h13" />,
  },
  {
    title: "Ask it anything",
    body: "Missed a point or joined late? Ask Ruvo what was decided, who owns what, or what someone said last time, and get an answer in seconds.",
    icon: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
  },
  {
    title: "Local by default",
    body: "Transcripts and profiles are stored on your machine, not on our servers. You decide what gets kept and what gets deleted.",
    icon: <path d="M12 3 5 6v5c0 4.5 3 8.4 7 10 4-1.6 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
  },
];

const steps = [
  ["Install the extension", "Add Ruvo to Chrome and connect your Google Calendar. Takes about a minute."],
  ["Open Meet as usual", "Ruvo docks in Chrome's side panel next to your call. Nothing changes for anyone else."],
  ["Review and follow up", "After the call, get a summary, decisions and action items, plus a transcript you can search."],
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-500">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_85%_15%,rgba(179,1,153,.14)_0%,transparent_70%),radial-gradient(40%_40%_at_60%_70%,rgba(253,98,91,.12)_0%,transparent_70%)]" />
          <div className="container-page grid items-center gap-16 pb-24 pt-16 lg:grid-cols-[1fr_1.05fr] lg:pt-24">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted shadow-card">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-mint" />
                {site.betaBadge}
              </span>
              <h1 className="h-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Know everyone <br className="hidden sm:block" />
                in the <span className="text-ruvo">meeting.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
                Ruvo sits in Chrome&apos;s side panel next to Google Meet. It knows who&apos;s on the call, captures the conversation, and
                answers your questions with full meeting context.
              </p>
              <div className="mt-9">
                <WaitlistForm />
                <p className="mt-3 pl-1 text-sm text-muted">Free during beta. No spam, one email when your invite is ready.</p>
              </div>
            </div>
            <HeroMock />
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-line bg-[#FBFBFD] py-24">
          <div className="container-page">
            <h2 className="h-display mx-auto max-w-2xl text-center text-4xl sm:text-5xl">Meeting context, without the note-taking</h2>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.title}>
                  <Icon>{f.icon}</Icon>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* See it in action */}
        <section className="py-24">
          <div className="container-page grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="h-display text-4xl sm:text-5xl">
                Every call, <span className="text-ruvo">reviewable.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                When the meeting ends, Ruvo turns it into a page you can come back to: a short summary, the decisions that were
                made, who owns what, and a transcript you can ask questions of.
              </p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {["Summaries and action items in one place", "Search across past meetings with the same people", "Export a recap to email or Slack"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/15 text-[11px] text-emerald-700">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <ReviewMock />
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-line bg-[#FBFBFD] py-24">
          <div className="container-page">
            <h2 className="h-display text-center text-4xl sm:text-5xl">Up and running in a minute</h2>
            <ol className="mt-14 grid gap-5 md:grid-cols-3">
              {steps.map(([title, body], i) => (
                <li key={title} className="rounded-2xl border border-line bg-white p-7 shadow-card">
                  <span className="text-ruvo font-display text-sm font-bold">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Privacy band */}
        <section className="py-24">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-3xl bg-plum px-8 py-14 text-white sm:px-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-pink/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 right-40 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
              <div className="relative max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-coral">Private by design</p>
                <h2 className="h-display mt-3 text-3xl sm:text-4xl">Your meetings stay on your machine.</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Ruvo stores transcripts and people profiles in a local database inside your browser. There&apos;s no bot in the
                  call and no recording uploaded to a server. Delete a meeting and it&apos;s gone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="join" className="scroll-mt-16 bg-gradient-to-b from-white via-brand-50/60 to-[#FFF1EE] py-28">
          <div className="container-page text-center">
            <h2 className="h-display mx-auto max-w-xl text-5xl leading-[1.05] sm:text-6xl">Walk into every meeting prepared.</h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-muted">Join the waitlist and be first in when the beta opens.</p>
            <div className="mt-10">
              <WaitlistForm variant="stacked" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
