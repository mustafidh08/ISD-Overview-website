import { ImageResponse } from "next/og";

import { siteContent } from "@/content";
import { isLocale, routing } from "@/i18n/routing";

export const runtime = "edge";
export const alt = "Islamic Smart Door showcase";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : routing.defaultLocale;
  const content = siteContent[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8f6ef",
          color: "#151a17",
          fontFamily: "Arial, sans-serif",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid #c7b35f",
            borderRadius: 28,
            padding: 48,
            background: "#fffdfa",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                color: "#0f6f5b",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: 0,
              }}
            >
              Portfolio Showcase
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 52,
                fontSize: 76,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              Islamic Smart Door
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                maxWidth: 720,
                fontSize: 32,
                lineHeight: 1.25,
                color: "#3d4642",
              }}
            >
              {content.hero.tagline}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 300,
              height: 420,
              borderRadius: 24,
              background: "#111815",
              color: "#f2d36b",
              fontSize: 42,
              fontWeight: 800,
              boxShadow: "0 30px 80px rgba(17, 24, 21, 0.22)",
            }}
          >
            ISD
          </div>
        </div>
      </div>
    ),
    size
  );
}
