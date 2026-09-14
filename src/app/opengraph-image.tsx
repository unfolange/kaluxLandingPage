import { ImageResponse } from "next/og";

export const alt = "Kaelux — Infraestructura inteligente para IA";
export const size = { width: 1200, height: 630 };
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
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#0b1120",
          backgroundImage:
            "linear-gradient(to right, #2a3345 1px, transparent 1px), linear-gradient(to bottom, #2a3345 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
            }}
          >
            <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
              <path
                d="M26 12 L26 88"
                stroke="#E6E8ED"
                strokeWidth="13"
                strokeLinecap="square"
              />
              <path
                d="M28 52 L84 14"
                stroke="#268bff"
                strokeWidth="13"
                strokeLinecap="square"
              />
              <path
                d="M28 52 L84 88"
                stroke="#268bff"
                strokeWidth="13"
                strokeLinecap="square"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 44,
              fontWeight: 600,
              letterSpacing: 6,
              color: "#e6e8ed",
            }}
          >
            KAELU<span style={{ color: "#268bff" }}>X</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 920,
            color: "#e6e8ed",
          }}
        >
          No compras agentes. Construyes infraestructura.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#8b93a8",
          }}
        >
          Infraestructura de IA · sin atarte a un proveedor
        </div>
      </div>
    ),
    { ...size }
  );
}
