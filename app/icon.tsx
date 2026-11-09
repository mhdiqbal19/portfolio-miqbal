import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 128, height: 128 };
export const contentType = "image/png";

/** Favicon: round portrait with a brass ring. Next serves it at /icon and links it in <head>. */
export default async function Icon() {
  const photo = await readFile(join(process.cwd(), "assets", "avatar.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
        <div
          style={{
            display: "flex",
            width: 124,
            height: 124,
            borderRadius: 62,
            border: "6px solid #d9ad5f",
            overflow: "hidden",
          }}
        >
          <img src={src} alt="" width={112} height={112} style={{ objectFit: "cover" }} />
        </div>
      </div>
    ),
    size,
  );
}
