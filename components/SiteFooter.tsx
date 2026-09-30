import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center justify-between gap-5 py-10 sm:flex-row">
        <Logo />
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="/privacy" className="hover:text-ink">Privacy</a>
          <a href="/terms" className="hover:text-ink">Terms</a>
          <span>© {new Date().getFullYear()} Ruvo</span>
        </div>
      </div>
      <p className="container-page border-t border-line py-6 text-center text-xs text-muted">
        Ruvo is not affiliated with or endorsed by Google. Google Meet and Chrome are trademarks of Google LLC.
      </p>
    </footer>
  );
}
