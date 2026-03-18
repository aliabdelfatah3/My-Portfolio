import { useEffect, useRef } from "react";

/**
 * ParticlesBackground
 * Renders a subtle floating particles effect on an HTML canvas.
 * Particles gently drift and connect with lines when close enough.
 * Fully responsive and theme-aware (adjusts opacity in light/dark mode).
 */
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const PARTICLE_COUNT = 55;
    const MAX_DIST = 130;   // max distance to draw connecting lines
    const SPEED = 0.35;

    // Detect dark mode
    const isDark = () => document.documentElement.classList.contains("dark");

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const dark = isDark();
      const dotColor = dark ? "rgba(139, 92, 246, 0.6)" : "rgba(99, 102, 241, 0.4)";
      const lineColor = dark
        ? (alpha) => `rgba(139, 92, 246, ${alpha * 0.3})`
        : (alpha) => `rgba(99, 102, 241, ${alpha * 0.2})`;

      // Update & draw dots
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = 1 - dist / MAX_DIST;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor(alpha);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    // Resize handler
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
