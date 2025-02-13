import { ImageResponse } from "next/og"

const ICON_SIZE = {
  width: 192,
  height: 192,
} as const

export const size = ICON_SIZE
export const contentType = "image/png" as const

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
        }}
      >
        <svg
          viewBox="0 0 48 48"
          width={ICON_SIZE.width}
          height={ICON_SIZE.height}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <path
            fill="#FF0000"
            d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
          />
          {/* Play Button */}
          <path fill="#FFFFFF" d="M20 31L20 17 32 24z" />
        </svg>
      </div>
    ),
    ICON_SIZE
  )
}
