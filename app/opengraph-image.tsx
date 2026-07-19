import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const alt = `${SITE.name} — Frontend & Full Stack Developer`;
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
          background: "linear-gradient(135deg, #050816 0%, #0b1030 55%, #1a1040 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.45) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.35) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 30, color: "#06B6D4", letterSpacing: 6 }}>
          PORTFOLIO
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 18 }}>
          {SITE.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "rgba(255,255,255,0.75)", marginTop: 16 }}>
          Frontend · Full Stack · AI Automation
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8B5CF6", marginTop: 44 }}>
          {SITE.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
