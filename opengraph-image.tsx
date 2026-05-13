import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #020617 0%, #07111f 50%, #0284c7 100%)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 28, color: "#7dd3fc", letterSpacing: 4 }}>GEN AI STUDENT BUILDER</div>
        <div style={{ marginTop: 24, maxWidth: 900, fontSize: 82, fontWeight: 800, lineHeight: 1 }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 28, maxWidth: 860, fontSize: 34, color: "#dbeafe" }}>
          Blog, portfolio, hackathons, code, and college life.
        </div>
      </div>
    ),
    size
  );
}
