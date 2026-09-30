import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Inter_Tight({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Ruvo — Know everyone in the meeting",
  description:
    "Ruvo lives in Chrome's side panel next to Google Meet. It knows who's on the call, captures the conversation, and answers questions with full meeting context.",
  openGraph: {
    title: "Ruvo — Know everyone in the meeting",
    description: "Meeting intelligence in your Google Meet side panel. Join the early access list.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
