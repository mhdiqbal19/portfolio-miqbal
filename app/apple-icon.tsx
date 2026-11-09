import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon: full-bleed square (iOS rounds the corners itself). */
export default async function AppleIcon() {
  const photo = await readFile(join(process.cwd(), "assets", "avatar.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#060b16" }}>
        <img src={src} alt="" width={180} height={180} style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
