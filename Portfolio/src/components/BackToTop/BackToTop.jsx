import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/30 group-hover:shadow-accent-primary/60 group-hover:scale-110 transition-all duration-300">
        {/* Code-themed icon: upward chevron styled as < / > */}
        <span className="text-white font-mono font-bold text-lg leading-none select-none">
          ↑
        </span>
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary opacity-40 group-hover:opacity-0 animate-ping" />
      </div>
    </button>
  );
};

export default BackToTop;
