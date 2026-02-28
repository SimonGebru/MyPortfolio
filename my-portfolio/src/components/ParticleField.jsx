import { useEffect, useRef, useCallback } from "react";

const PARTICLE_COUNT = 90;
const CONNECTION_DIST = 180;
const MOUSE_RADIUS = 340;
const SPOTLIGHT_RADIUS = 420;

const ParticleField = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const smoothMouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef(0);
  const dimRef = useRef({ w: 0, h: 0 });

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const initParticles = useCallback((w, h) => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const baseOpacity = Math.random() * 0.2 + 0.18;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.6 + 0.6,
        opacity: baseOpacity,
        baseOpacity,
      };
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let resizeRaf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight; 

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimRef.current = { w, h };

      // Re-init om första gången, eller om man vill: alltid vid resize
      initParticles(w, h);
    };

    resize();

    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(resize);
    };

    
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      const { w, h } = dimRef.current;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Smooth mouse (snabbare respons än innan)
      const sm = smoothMouseRef.current;
      sm.x += (mouse.x - sm.x) * 0.12; 
      sm.y += (mouse.y - sm.y) * 0.12;

      // Spotlight
      if (sm.x > -500 && sm.y > -500) {
        const spotGrad = ctx.createRadialGradient(
          sm.x,
          sm.y,
          0,
          sm.x,
          sm.y,
          SPOTLIGHT_RADIUS
        );
        spotGrad.addColorStop(0, "hsla(205, 70%, 65%, 0.10)");
        spotGrad.addColorStop(0.55, "hsla(210, 45%, 55%, 0.04)");
        spotGrad.addColorStop(1, "hsla(210, 35%, 45%, 0)");
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, w, h); 
      }

      // Update particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const proximity = 1 - dist / MOUSE_RADIUS;
          const force = proximity * proximity * 0.045;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
          p.opacity = p.baseOpacity + proximity * 0.45;
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.03;
        }

        // friction + clamp
        p.vx *= 0.995;
        p.vy *= 0.995;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.25) {
          p.vx = (p.vx / speed) * 1.25;
          p.vy = (p.vy / speed) * 1.25;
        }
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);

            const mouseBoost =
              mouseDist < MOUSE_RADIUS
                ? 1 + (1 - mouseDist / MOUSE_RADIUS) * 2.6
                : 1;

            const alpha = (1 - dist / CONNECTION_DIST) * 0.14 * mouseBoost;
            ctx.strokeStyle = `hsla(210, 45%, 70%, ${Math.min(alpha, 0.42)})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        const dotAlpha = Math.min(p.opacity + 0.08, 0.95);
        ctx.fillStyle = `hsla(210, 45%, 78%, ${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [initParticles, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 mix-blend-screen"
style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
};

export default ParticleField;