import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

export const alt = "JRJ Reinstaters — Amazon seller appeal support";
export const size = {
  width: 1200,
  height: 630,
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
          justifyContent: "space-between",
          background: "#f7f3ec",
          color: "#11243d",
          padding: "74px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 12,
              background: "#c9a96e",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 800 }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#8a7560",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Independent Amazon Consulting
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Amazon Seller Suspension Appeal Support
          </div>
        </div>
        <div style={{ color: "#5f6b7b", fontSize: 28 }}>
          Account suspensions · Plan of Action help · ASIN reinstatement
        </div>
      </div>
    ),
    size
  );
}
