/**
 * Ruvo wordmark, rebuilt as live text so it stays crisp and transparent on any background.
 * The original artwork is kept at /public/ruvo-logo.png for reference and social images.
 *
 * To swap in a real SVG export instead of gradient text:
 * 1. Drop the exported file at public/ruvo-logo.svg (with the gradient baked into its fill/defs).
 * 2. Replace the <span> below with an <img src="/ruvo-logo.svg" alt="Ruvo" /> (or inline the SVG
 *    markup directly if you want it to inherit currentColor), sized via the `size` prop the same way.
 * 3. Delete the .bg-ruvo/.text-ruvo gradient classes here if nothing else in app/globals.css uses them.
 */
export function Logo({ className = "", size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <span
      className={`text-ruvo font-display font-extrabold leading-none tracking-[-0.04em] ${
        size === "lg" ? "text-4xl" : "text-[26px]"
      } ${className}`}
    >
      Ruvo
    </span>
  );
}
