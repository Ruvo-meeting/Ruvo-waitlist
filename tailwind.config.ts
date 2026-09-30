import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D17",
        muted: "#5B6275",
        line: "#E7E8EF",
        // Sampled from the Ruvo wordmark: plum → violet → magenta → pink → coral
        plum: "#25023E",
        brand: {
          50: "#FDF0F8",
          100: "#F9DDEE",
          400: "#D63BA3",
          500: "#B30199",
          600: "#710181",
        },
        pink: "#FB216F",
        coral: "#FD625B",
        mint: "#2BD4A4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,13,23,.04), 0 8px 24px -8px rgba(11,13,23,.10)",
        float: "0 2px 4px rgba(11,13,23,.04), 0 24px 48px -12px rgba(11,13,23,.18)",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".35" } },
        wave: { "0%,100%": { transform: "scaleY(.35)" }, "50%": { transform: "scaleY(1)" } },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
        wave: "wave 1.1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
