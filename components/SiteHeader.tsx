import { Logo } from "@/components/Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-white/80 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="/" aria-label="Ruvo home">
          <Logo />
        </a>
        <a href="/#join" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600">
          Get early access
        </a>
      </nav>
    </header>
  );
}
