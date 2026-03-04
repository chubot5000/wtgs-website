"use client";

import { useRef, useState } from "react";
import styles from "./Episodes.module.css";

const episodes = [
  { num: "042", date: "Oct 12", title: "The Lighthouse at the End of Time", desc: "A solitary keeper watches over a sea of stars, counting the waves as they turn into memories.", duration: "48 min" },
  { num: "041", date: "Oct 05", title: "Beneath the Velveteen Canopy", desc: "Wandering through a forest where the leaves whisper ancient lullabies and the moss glows soft blue.", duration: "52 min" },
  { num: "040", date: "Sep 28", title: "Train to the Midnight City", desc: "Rhythmic tracks and rain on the window pane. A journey to a city that only exists when you close your eyes.", duration: "45 min" },
];

function Card({ ep }: { ep: (typeof episodes)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  return (
    <div
      ref={ref}
      className={styles.card}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
    >
      {glow.active && (
        <div
          className={styles.glowOverlay}
          style={{
            background: `radial-gradient(300px circle at ${glow.x}px ${glow.y}px, rgba(93,127,176,0.08), transparent 70%)`,
          }}
        />
      )}
      <div className={styles.meta}>
        <span className={styles.number}>No. {ep.num}</span>
        <span className={styles.date}>{ep.date}</span>
      </div>
      <h3 className={styles.epTitle}>{ep.title}</h3>
      <p className={styles.epDesc}>{ep.desc}</p>
      <div className={styles.bottom}>
        <span className={styles.playCircle}>▶</span>
        <span className={styles.duration}>{ep.duration}</span>
      </div>
    </div>
  );
}

export default function Episodes() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Recent Dreams</h2>
        <a href="#" className={styles.archive}>View Archive →</a>
      </div>
      <div className={styles.grid}>
        {episodes.map((ep) => (
          <Card key={ep.num} ep={ep} />
        ))}
      </div>
    </section>
  );
}
