import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

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
          background: "#0D7377",
          borderRadius: 6,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8962E" strokeWidth="2">
          <path d="M12 5.5c-1.2-1.4-2.8-2-4.5-2C4.5 3.5 2.5 5.8 2.5 9c0 2.2.6 3.6 1.3 5.8.6 1.9 1 4.1 1.7 5.3.5.9 1.1 1.4 1.8 1.4 1.1 0 1.3-1.5 1.6-3.1.3-1.5.6-3.1 1.6-3.1s1.3 1.6 1.6 3.1c.3 1.6.5 3.1 1.6 3.1.7 0 1.3-.5 1.8-1.4.7-1.2 1.1-3.4 1.7-5.3.7-2.2 1.3-3.6 1.3-5.8 0-3.2-2-5.5-5-5.5-1.7 0-3.3.6-4.5 2z" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
