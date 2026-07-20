import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const alt = `${SITE.name} — Web & React Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#9CF400", letterSpacing: 6 }}>
          PORTFOLIO
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 18 }}>
          {SITE.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "rgba(255,255,255,0.75)", marginTop: 16 }}>
          Web &amp; React Developer · WordPress · Elementor
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9CF400", marginTop: 44 }}>
          {SITE.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
