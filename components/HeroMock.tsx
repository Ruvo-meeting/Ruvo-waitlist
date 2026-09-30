const tiles = [
  { i: "PK", c: "from-amber-300 to-orange-400", speaking: true },
  { i: "JL", c: "from-sky-300 to-blue-500" },
  { i: "MA", c: "from-emerald-300 to-teal-500" },
  { i: "You", c: "from-fuchsia-300 to-purple-500" },
];

function Wave() {
  return (
    <span className="flex h-3 items-center gap-[2px]" aria-hidden="true">
      {[0, 150, 300].map((d) => (
        <span key={d} className="h-full w-[2px] origin-center animate-wave rounded bg-white" style={{ animationDelay: `${d}ms` }} />
      ))}
    </span>
  );
}

/** Illustrative product mock: a Google Meet-style call with the Ruvo side panel docked on the right. */
export default function HeroMock() {
  return (
    <div className="relative mx-auto mt-8 w-full max-w-[560px] sm:mb-12" aria-label="Preview of Ruvo running beside a video call" role="img">
      {/* Browser frame */}
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-float">
        <div className="flex items-center gap-1.5 border-b border-line bg-[#F7F7FA] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 truncate rounded-md bg-white px-2 py-0.5 text-[10px] text-muted">meet.google.com/qbx-rtpw-nce</span>
        </div>

        <div className="flex">
          {/* Call area */}
          <div className="flex-1 bg-[#1C1D22] p-2.5">
            <div className="grid grid-cols-2 gap-2">
              {tiles.map((t) => (
                <div
                  key={t.i}
                  className={`relative grid aspect-[4/3] place-items-center rounded-lg bg-[#2A2B31] ${t.speaking ? "ring-2 ring-pink" : ""}`}
                >
                  <span className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${t.c} text-[11px] font-semibold text-white sm:h-11 sm:w-11`}>
                    {t.i}
                  </span>
                  {t.speaking && (
                    <span className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-ruvo">
                      <Wave />
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2.5 rounded-md bg-black/50 px-2 py-1.5 text-[10px] leading-snug text-white/90">
              <span className="font-semibold text-white">Priya:</span> …so if we can lock the pricing tiers by Friday, legal can review Monday.
            </div>
            <div className="mt-2.5 flex justify-center gap-1.5">
              {["bg-[#3C3D43]", "bg-[#3C3D43]", "bg-[#EA4335]"].map((c, i) => (
                <span key={i} className={`h-6 w-6 rounded-full ${c}`} />
              ))}
            </div>
          </div>

          {/* Ruvo side panel */}
          <div className="w-[44%] border-l border-line bg-white p-3 text-[11px]">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-ruvo font-display text-[14px] font-extrabold tracking-tight">Ruvo</span>
              <span className="flex items-center gap-1 text-[10px] font-medium text-mint">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-mint" /> Live
              </span>
            </div>

            <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-muted">On this call · 4 of 5</p>
            <ul className="mb-3 space-y-1.5">
              {[
                ["Priya K.", "VP Product · Northwind", "from-amber-300 to-orange-400"],
                ["James L.", "Eng Lead · Northwind", "from-sky-300 to-blue-500"],
                ["Maya A.", "Counsel · Northwind", "from-emerald-300 to-teal-500"],
              ].map(([n, r, c]) => (
                <li key={n} className="flex items-center gap-2">
                  <span className={`h-5 w-5 shrink-0 rounded-full bg-gradient-to-br ${c}`} />
                  <span className="min-w-0">
                    <span className="block truncate font-medium leading-tight">{n}</span>
                    <span className="block truncate text-[9.5px] leading-tight text-muted">{r}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="rounded-lg bg-brand-50 p-2">
              <p className="mb-1 text-[10px] font-medium text-brand-600">You asked</p>
              <p className="mb-2 leading-snug">What did Priya commit to?</p>
              <p className="rounded-md bg-white p-1.5 leading-snug text-ink/80 shadow-sm">
                Lock pricing tiers by <b>Friday</b> so legal can review Monday.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-6 -top-10 hidden w-44 animate-floaty rounded-xl border border-line bg-white p-3 shadow-float sm:block lg:-left-10">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">Joined late</p>
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-gradient-to-br from-rose-300 to-pink-500" />
          <div className="text-[11px] leading-tight">
            <p className="font-semibold">Dan R.</p>
            <p className="text-muted">Head of Sales</p>
          </div>
        </div>
        <p className="mt-2 text-[10px] leading-snug text-muted">Last met Aug 12 · asked about SSO</p>
      </div>

      <div
        className="absolute -bottom-16 -right-4 hidden w-52 animate-floaty rounded-xl border border-line bg-white p-3 shadow-float sm:block"
        style={{ animationDelay: "1.5s" }}
      >
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">Action items · 3</p>
        <ul className="space-y-1 text-[11px]">
          <li className="flex gap-1.5"><span className="text-mint">●</span> Priya — pricing tiers, Fri</li>
          <li className="flex gap-1.5"><span className="text-brand-500">●</span> James — SSO estimate</li>
          <li className="flex gap-1.5"><span className="text-amber-500">●</span> You — send recap</li>
        </ul>
      </div>
    </div>
  );
}
