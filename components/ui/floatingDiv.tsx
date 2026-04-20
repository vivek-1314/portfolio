"use client";
import { useEffect, useRef } from "react";

const techStack = [
  "C++", "JavaScript", "TypeScript", "Python", "HTML", "Tailwind CSS",
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Git", "Vercel", "Firebase", "Postman", "LangChain", "LangGraph", "LLMs", "Pinecone",
];

const ballColors = ["#ff4431", "#ff8554"];

export default function FloatingTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mouse = { x: -999, y: -999 };

    const handleMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const handleMouseLeave = () => { mouse.x = -999; mouse.y = -999; };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const W = () => container.offsetWidth;
    const H = () => container.offsetHeight;

    const tags = techStack.map((name, idx) => {
      const el = document.createElement("span");
      el.textContent = name;
      el.className = `text-[0.8rem] ${idx%2 ? "bg-[#fe956f]" : "bg-white"} px-3 py-1 rounded-full Capitalize Outfit-Light tracking-wide text-[#010302]/80`;
      el.style.cssText = `
        position: absolute;
        white-space: nowrap;
        pointer-events: none;
        user-select: none;
        will-change: transform;
        transform: translateZ(0);
        backface-visibility: hidden;
      `;
      container.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.2;

      return {
        el,
        x: 60 + Math.random() * (W() - 120),
        y: 40 + Math.random() * (H() - 80),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w: 0,
        h: 0,
      };
    });

    const balls = Array.from({ length: 12 }).map(() => {
      const el = document.createElement("div");
      const size = 6 + Math.random() * 8;
      const color = ballColors[Math.floor(Math.random() * ballColors.length)];
      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        pointer-events: none;
        will-change: transform;
        transform: translateZ(0);
        backface-visibility: hidden;
        opacity: 0.85;
      `;
      container.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.2;
      return {
        el,
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w: size,
        h: size,
      };
    });

    setTimeout(() => {
      tags.forEach((t) => {
        t.w = t.el.offsetWidth;
        t.h = t.el.offsetHeight;
      });
    }, 100);

    let animId: number;

    const animate = () => {
      const cw = W(), ch = H();

      tags.forEach((t) => {
        const dx = t.x - mouse.x;
        const dy = t.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repel = 120;

        if (dist < repel && dist > 0) {
          const force = ((repel - dist) / repel) * 0.4;
          t.vx += (dx / dist) * force;
          t.vy += (dy / dist) * force;
        }

        const maxSpeed = 1.2;
        const spd = Math.sqrt(t.vx * t.vx + t.vy * t.vy);
        if (spd > maxSpeed) { t.vx = (t.vx / spd) * maxSpeed; t.vy = (t.vy / spd) * maxSpeed; }

        const minSpeed = 0.2;
        if (spd < minSpeed && spd > 0) { t.vx = (t.vx / spd) * minSpeed; t.vy = (t.vy / spd) * minSpeed; }

        t.x += t.vx;
        t.y += t.vy;

        if (t.x < 0) { t.x = 0; t.vx = Math.abs(t.vx); }
        if (t.y < 0) { t.y = 0; t.vy = Math.abs(t.vy); }
        if (t.x + t.w > cw) { t.x = cw - t.w; t.vx = -Math.abs(t.vx); }
        if (t.y + t.h > ch) { t.y = ch - t.h; t.vy = -Math.abs(t.vy); }

        t.vx *= 0.998;
        t.vy *= 0.998;

        t.el.style.transform = `translate(${t.x}px, ${t.y}px)`;
      });

      balls.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx); }
        if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy); }
        if (b.x + b.w > cw) { b.x = cw - b.w; b.vx = -Math.abs(b.vx); }
        if (b.y + b.h > ch) { b.y = ch - b.h; b.vy = -Math.abs(b.vy); }

        b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      tags.forEach((t) => t.el.remove());
      balls.forEach((b) => b.el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] overflow-hidden rounded-2xl"
    />
  );
}