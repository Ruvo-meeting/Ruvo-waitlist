/**
 * Ruvo wordmark, rebuilt as live text so it stays crisp and transparent on any background.
 * The original artwork is kept at /public/ruvo-logo.png for reference and social images.
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
