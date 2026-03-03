"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  phase: number;
  speed: number;
  baseAlpha: number;
  bright: boolean;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let stars: Star[] = [];
    let drift = 0;

    function createStars() {
      stars = [];
      for (let i = 0; i < 250; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 1.2 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.7,
          baseAlpha: 0.15 + Math.random() * 0.35,
          bright: false,
        });
      }
      for (let i = 0; i < 12; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: 1.8 + Math.random() * 1.2,
          phase: Math.random() * Math.PI * 2,
          speed: 0.2 + Math.random() * 0.5,
          baseAlpha: 0.35 + Math.random() * 0.3,
          bright: true,
        });
      }
    }

    createStars();

    let animId: number;
    function draw(time: number) {
      if (!ctx) return;
      drift += 0.015;
      ctx.clearRect(0, 0, w, h);

      for (const star of stars) {
        const twinkle =
          star.baseAlpha *
          (0.5 + 0.5 * Math.sin(time * 0.001 * star.speed + star.phase));
        const sx = (star.x + drift * 0.3) % w;
        const sy = star.y;

        if (star.bright) {
          const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, star.radius * 4);
          grad.addColorStop(0, `rgba(200, 210, 240, ${twinkle * 0.5})`);
          grad.addColorStop(1, "rgba(200, 210, 240, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(sx, sy, star.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(230, 235, 255, ${twinkle})`;
        ctx.beginPath();
        ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      createStars();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
