import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** 1200×630 share card: portrait on the right, name and role on the left. */
export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public", "me.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0c1830 0%, #060b16 70%)",
          color: "#f4ecdc",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 70px", width: 700 }}>
          <div style={{ display: "flex", color: "#d9ad5f", fontSize: 26, letterSpacing: 6, textTransform: "uppercase" }}>
            {profile.role}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 112, fontWeight: 700, lineHeight: 1 }}>
            <span>Muhammad</span>
            <span style={{ color: "#d9ad5f" }}>Iqbal</span>
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 28, color: "#a9b0c0", fontFamily: "sans-serif" }}>
            Laravel · Node.js · Next.js · React · Flutter
          </div>
          <div style={{ display: "flex", marginTop: 14, width: 120, height: 4, background: "#d9ad5f" }} />
        </div>
        <div style={{ display: "flex", position: "relative", width: 500, height: 630 }}>
          <img src={src} alt="" width={500} height={630} style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background: "linear-gradient(90deg, #060b16 0%, rgba(6,11,22,0) 45%)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
