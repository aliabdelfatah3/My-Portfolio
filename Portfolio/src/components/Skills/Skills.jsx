import React from "react";
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

const logos = [
  { src: HTML_logo, alt: "HTML" },
  { src: CSS_logo, alt: "CSS" },
  { src: React_logo, alt: "React" },
  { src: JavaScript_logo, alt: "JavaScript" },
  { src: Git_logo, alt: "Git" },
  { src: GitHub_logo, alt: "GitHub" },
  { src: Bootstrap_logo, alt: "Bootstrap" },
  { src: Material_UI_logo, alt: "Material UI" },
  { src: Redux_logo, alt: "Redux" },
  { src: Tailwindcss_logo, alt: "Tailwind CSS" },
  { src: TypeScript_logo, alt: "TypeScript" },
  { src: Vercel_logo, alt: "Vercel" },
  { src: Vite_logo, alt: "Vite" },
  { src: Webflow_logo, alt: "Webflow" },
];

function Skills() {
  return (
    <div className="w-full h-full flex justify-center items-center px-4">
      <div className="flex flex-col items-center justify-center bg-Bej dark:bg-purple-950 shadow-2xl rounded-lg p-6 sm:p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
        <h1 className="text-2xl md:text-3xl font-bold dark:text-white mb-4">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="size-16 sm:size-20 md:size-24 lg:hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
