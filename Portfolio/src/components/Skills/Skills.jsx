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

function Skills() {
  return (
    <>
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="flex items-center justify-center bg-Bej shadow-2xl dark:bg-purple-950 text-center  ">
          <div className="text-center flex flex-col md:gap-5">
            <h1 className="text-2xl dark:text-white font-sans font-bold">
              Skills
            </h1>
            <div className="flex flex-wrap py-4 justify-center md:gap-16 gap-5">
              <img
                src={HTML_logo}
                alt="HTML"
                className="md:size-24 size-16 lg:hover:scale-110 "
              />
              <img
                src={CSS_logo}
                alt="CSS"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={React_logo}
                alt="React"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={JavaScript_logo}
                alt="JavaScript"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Git_logo}
                alt="Git"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={GitHub_logo}
                alt="GitHub"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Bootstrap_logo}
                alt="Bootstrap"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Material_UI_logo}
                alt="Material UI"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Redux_logo}
                alt="Redux"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Tailwindcss_logo}
                alt="Tailwind CSS"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={TypeScript_logo}
                alt="TypeScript"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Vercel_logo}
                alt="Vercel"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Vite_logo}
                alt="Vite"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
              <img
                src={Webflow_logo}
                alt="Webflow"
                className="md:size-24 size-16 lg:hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
