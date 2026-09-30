import { ImageResponse } from "next/og";

// Node runtime's OG renderer has a font-loading bug on Windows dev machines
// (next@15.1.6); edge avoids it and works fine in production.
export const runtime = "edge";
export const alt = "Ruvo — Know everyone in the meeting.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FBFBFD",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            backgroundImage:
              "linear-gradient(90deg, #25023e 0%, #710181 30%, #b30199 50%, #fb216f 72%, #fd625b 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Ruvo
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#0B0D17",
            textAlign: "center",
          }}
        >
          Know everyone in the meeting.
        </div>
      </div>
    ),
    { ...size }
  );
}
