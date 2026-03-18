import { useEffect, useRef } from "react";
import HTML_logo from "./Pic/HTML_logo.png";
import CSS_logo from "./Pic/CSS_logo.png";
import Git_logo from "./Pic/Git_logo.png";
import GitHub_logo from "./Pic/GitHub_logo.png";
import Bootstrap_logo from "./Pic/Bootstrap_logo.png";
import JavaScript_logo from "./Pic/JavaScript_logo.png";
import Material_UI_logo from "./Pic/Material_UI_logo.png";
import React_logo from "./Pic/React_logo.png";
import Redux_logo from "./Pic/Redux_logo.png";
import Tailwindcss_logo from "./Pic/Tailwindcss_logo.png";
import TypeScript_logo from "./Pic/TypeScript_logo.png";
import Vercel_logo from "./Pic/Vercel_logo.png";
import Vite_logo from "./Pic/Vite_logo.png";
import Webflow_logo from "./Pic/Webflow_logo.png";
import MySql_logo from "./Pic/MySql_logo.png";

import { FaAngular, FaPhp, FaCube } from "react-icons/fa";

const allItems = [
  { type: "img", src: HTML_logo,        alt: "HTML" },
  { type: "img", src: CSS_logo,         alt: "CSS" },
  { type: "img", src: JavaScript_logo,  alt: "JavaScript" },
  { type: "img", src: React_logo,       alt: "React" },
  { type: "img", src: Redux_logo,       alt: "Redux" },
  { type: "img", src: Tailwindcss_logo, alt: "Tailwind CSS" },
  { type: "img", src: TypeScript_logo,  alt: "TypeScript" },
  { type: "img", src: Git_logo,         alt: "Git" },
  { type: "img", src: GitHub_logo,      alt: "GitHub" },
  { type: "img", src: Bootstrap_logo,   alt: "Bootstrap" },
  { type: "img", src: Material_UI_logo, alt: "Material UI" },
  { type: "img", src: Vercel_logo,      alt: "Vercel" },
  { type: "img", src: Vite_logo,        alt: "Vite" },
  { type: "img", src: Webflow_logo,     alt: "Webflow" },
  { type: "img", src: MySql_logo,       alt: "MySQL" },
  { type: "icon", Icon: FaAngular, alt: "Angular", color: "text-[#DD0031]" },
  { type: "icon", Icon: FaCube,    alt: "Zustand", color: "text-[#4d2d18] dark:text-[#a07f60]" },
  { type: "icon", Icon: FaPhp,     alt: "PHP",     color: "text-[#777BB4]" },
];

function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const items = node.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 55);
          });
          observer.unobserve(node);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center flex-1 w-full px-4 pt-10 pb-10 lg:pt-16">
      <div className="flex flex-col items-center justify-center bg-Bej dark:bg-[#201B4B] shadow-2xl rounded-lg p-6 sm:p-8 w-full max-w-[1200px]">
        <h1 className="mb-6 text-2xl font-bold text-center md:text-3xl xl:text-4xl dark:text-white font-eb-garamond">
          Skills
        </h1>
        <div
          ref={gridRef}
          className="flex flex-wrap justify-center gap-6 mb-2 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {allItems.map((item, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center justify-center gap-2 group"
              style={{
                opacity: 0,
                transform: "translateY(28px)",
                transition: `opacity 0.5s ease, transform 0.5s ease`,
              }}
            >
              {item.type === "img" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                />
              ) : (
                <item.Icon
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 group-hover:scale-110 transition-transform duration-300 ${item.color}`}
                />
              )}
              <span className="text-xs transition-opacity duration-300 opacity-0 md:text-sm font-Montserrat dark:text-gray-300 group-hover:opacity-100">
                {item.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
