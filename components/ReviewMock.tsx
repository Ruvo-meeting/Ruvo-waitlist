/** Illustrative mock of the post-meeting review page. */
export default function ReviewMock() {
  const lines = [
    ["00:04", "Priya", "Let's start with where pricing landed last week."],
    ["02:31", "James", "SSO is the blocker for the two enterprise pilots."],
    ["07:52", "Maya", "Legal needs the tiers finalized before review."],
    ["11:18", "Priya", "Then let's lock tiers by Friday."],
  ];
  return (
    <div className="relative mx-auto w-full max-w-[520px]" role="img" aria-label="Preview of Ruvo's meeting review page">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-coral/20 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-float">
        <div className="border-b border-line px-5 py-4">
          <p className="text-[11px] font-medium text-muted">Tue, Sep 29 · 32 min · 5 people</p>
          <p className="font-display text-lg font-bold tracking-tight">Northwind pricing sync</p>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">Summary</p>
            <p className="text-[13px] leading-relaxed text-ink/80">
              Team agreed to finalize three pricing tiers this week. SSO is the main blocker for enterprise pilots; James will
              scope it.
            </p>
            <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-wider text-muted">Decisions</p>
            <span className="inline-block rounded-full bg-mint/15 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
              3 tiers, not 4
            </span>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">Transcript</p>
            <ul className="space-y-2.5">
              {lines.map(([t, who, text]) => (
                <li key={t} className="text-[12px] leading-snug">
                  <span className="mr-1.5 font-mono text-[10px] text-muted">{t}</span>
                  <span className="font-semibold">{who}</span>
                  <p className="text-ink/75">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-line bg-[#FAFAFC] px-5 py-3">
          <div className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[12px] text-muted">
            Ask anything about this meeting…
            <span className="ml-auto grid h-6 w-6 place-items-center bg-ruvo rounded-full text-[11px] text-white">↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}
