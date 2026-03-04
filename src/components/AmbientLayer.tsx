"use client";

export default function AmbientLayer() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, var(--accent-nebula), transparent 70%)",
          filter: "blur(80px)",
          animation: "breathe 15s infinite alternate ease-in-out",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, var(--accent-nebula), transparent 70%)",
          filter: "blur(80px)",
          animation: "breathe 15s infinite alternate-reverse ease-in-out",
        }}
      />
    </div>
  );
}
