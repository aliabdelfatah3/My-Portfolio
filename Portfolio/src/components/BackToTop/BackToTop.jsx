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
      className="group fixed bottom-8 right-6 z-50"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary text-[#021014] shadow-lg shadow-accent-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-secondary">
        <span className="font-mono text-lg font-bold leading-none">^</span>
        <span className="absolute inset-0 rounded-full bg-accent-primary opacity-30 group-hover:opacity-0 animate-ping" />
      </div>
    </button>
  );
};

export default BackToTop;
