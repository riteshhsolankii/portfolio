import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#9CF400",
          borderRadius: "14px",
          color: "#000000",
          fontSize: 32,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
