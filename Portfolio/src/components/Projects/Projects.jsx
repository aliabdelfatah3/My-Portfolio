import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

// Tooltip rendered as a React Portal to escape ANY parent CSS transforms
function TooltipPortal({ url, pos, visible }) {
  if (!visible) return null;
  const imgSrc = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&meta=false`;
  const tooltipWidth = 224;
  const left = pos.x + 18 + tooltipWidth > window.innerWidth
    ? pos.x - 18 - tooltipWidth
    : pos.x + 18;
  const top = Math.max(10, pos.y - 90);

  return createPortal(
    <div className="fixed pointer-events-none z-[9990]" style={{ left, top }}>
      <div className="w-56 overflow-hidden border shadow-2xl rounded-xl border-white/20 dark:border-white/10 bg-dark-card">
        <div className="px-2 py-1.5 text-[10px] font-mono text-gray-400 bg-black/40 border-b border-white/10 truncate">
          🔗 {url.replace(/^https?:\/\//, "")}
        </div>
        <img
          src={imgSrc}
          alt="Site preview"
          className="object-cover object-top w-full h-32 bg-white"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
    </div>,
    document.body
  );
}

TooltipPortal.propTypes = {
  url: PropTypes.string.isRequired,
  pos: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
};

// Single card with 3D tilt + preview tooltip
function TiltCard({ project }) {
  const cardRef = useRef(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  const trackTooltip = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col items-center p-6 reveal-card group bg-light-card dark:bg-dark-card rounded-2xl"
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: "opacity 0.6s ease, transform 0.4s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <TooltipPortal url={project.link} pos={tooltipPos} visible={tooltipVisible} />

      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] -z-10"></div>
      <div className="absolute inset-[1px] z-0 rounded-2xl bg-light-card dark:bg-dark-card"></div>

      {/* Image Area wrapped in a div to track mouse separate from the link */}
      <div 
        className="relative z-10 w-full rounded-xl"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onMouseMove={trackTooltip}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="block w-full overflow-hidden relative z-10 rounded-xl"
        >
          <div className={`w-full h-64 sm:h-72 bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105 shadow-inner`}>
            <span className="px-4 text-2xl font-bold tracking-widest text-center text-white drop-shadow-lg font-syne">
              {project.title}
            </span>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/50 group-hover:opacity-100">
            <span className="px-6 py-2 text-lg font-semibold text-white transition-colors duration-300 border border-white rounded-full font-syne backdrop-blur-sm bg-black/20 hover:bg-white hover:text-black">
              View Project
            </span>
          </div>
        </a>
      </div>

      <div className="relative z-10 flex flex-col w-full mt-8 text-center">
        <h2 className="mb-3 text-2xl font-bold transition-colors duration-300 font-syne text-light-text-primary dark:text-dark-text-primary group-hover:text-accent-primary dark:group-hover:text-accent-secondary">
          {project.title}
        </h2>
        <p className="text-base leading-relaxed text-light-text-secondary dark:text-dark-text-secondary lg:text-lg font-inter">
          {project.desc}
        </p>
      </div>
    </div>
  );
}

TiltCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    gradient: PropTypes.string.isRequired,
  }).isRequired,
};

function Projects() {
  const projects = [
    {
      title: "Movie Database",
      link: "https://capstone-project-five-delta.vercel.app/",
      desc: "Responsive web application to search and explore movies from a public API. Features a Swiper carousel and optimized API data fetching with React Query.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
  title: "HexaShop – Premium E-Commerce Platform",
  link: "https://e-commerce-nu-eight-64.vercel.app/",
  desc: "Scalable full-stack e-commerce application built with React 19 and .NET 8. Implemented global state management with Zustand, optimized data fetching using React Query, secure authentication with JWT & Bcrypt, and a feature-rich shopping experience including cart persistence and order tracking.",
  gradient: "from-orange-500 to-pink-600",
},
    {
      title: "Angular Post CRUD",
      link: "https://post-crud-8s4yvyeiq-3looloos-projects.vercel.app/",
      desc: "High-performance CRUD application using Angular 19+ to manage data from a RESTful API. Features a reactive state management system using RxJS, custom pagination, and Tailwind CSS UI.",
      gradient: "from-red-500 to-rose-600",
    },
    {
      title: "Mini Shopify",
      link: "https://mini-shopify.vercel.app/",
      desc: "Mini e-commerce web app with product listing, cart management, and checkout flow. Optimized UX with modular Tailwind CSS.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Todo List",
      link: "https://react-todo-xi-umber.vercel.app/",
      desc: "Full-featured todo application with add, delete, and toggle tasks functionality.",
      gradient: "from-indigo-500 to-cyan-600",
    },
  ];

  const gridRef = useRef(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.querySelectorAll(".reveal-card").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
            }, i * 120);
          });
          observer.unobserve(node);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full px-4 py-24 mx-auto max-w-7xl sm:px-6">
      <h1 className="mb-16 text-3xl font-bold tracking-tight text-center md:text-5xl font-syne text-accent-primary dark:text-accent-secondary">
        Featured Projects
      </h1>

      <div ref={gridRef} className="grid w-full gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <TiltCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
