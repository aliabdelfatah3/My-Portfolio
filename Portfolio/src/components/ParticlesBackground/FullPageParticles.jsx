import { useEffect, useRef } from "react";

const CODE_SYMBOLS = [
  "{}", "=>", "</>", "[ ]", "()", "&&", "||", "===",
  "const", "let", "fn()", "!=", "++", "//",
  "<div>", "import", "return", "async", "?.","...",
];

const FullPageParticles = () => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const scrollRef = useRef(0);
  const targetScrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const COUNT = 38;
    const MAX_DIST = 150;
    const SPEED = 0.28;

    // Hue per section (shifts as user scrolls)
    const HUE_STOPS = [196, 188, 178, 204, 190, 174, 198];

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
      fontSize: Math.random() * 7 + 11, // 11px - 18px
      rotation: (Math.random() - 0.5) * 0.3,
    }));

    const getHue = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return HUE_STOPS[0];
      const progress = Math.min(scrollRef.current / maxScroll, 1);
      const stopsCount = HUE_STOPS.length - 1;
      const scaled = progress * stopsCount;
      const index = Math.floor(scaled);
      const t = scaled - index;
      const h1 = HUE_STOPS[Math.min(index, stopsCount)];
      const h2 = HUE_STOPS[Math.min(index + 1, stopsCount)];
      return h1 + (h2 - h1) * t;
    };

    const isDark = () => document.documentElement.classList.contains("dark");

    const draw = () => {
      scrollRef.current += (targetScrollRef.current - scrollRef.current) * 0.05;
      ctx.clearRect(0, 0, W, H);

      const hue = getHue();
      const dark = isDark();
      const alpha = dark ? 0.45 : 0.45;
      const lineAlphaBase = dark ? 0.18 : 0.2;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -40) p.x = W + 40;
        else if (p.x > W + 40) p.x = -40;
        if (p.y < -20) p.y = H + 20;
        else if (p.y > H + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.fontSize}px 'Fira Code', 'Courier New', monospace`;
        ctx.fillStyle = `hsla(${hue}, 75%, ${dark ? 72 : 38}%, ${alpha})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      // Draw connecting lines between close symbols
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const lineAlpha = (1 - dist / MAX_DIST) * lineAlphaBase;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${hue}, 65%, ${dark ? 70 : 50}%, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleScroll = () => { targetScrollRef.current = window.scrollY; };
    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default FullPageParticles;
