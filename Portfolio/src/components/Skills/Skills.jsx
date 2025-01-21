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

function Skills() {
  return (
    <>
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="flex items-center justify-center bg-Bej shadow-2xl dark:bg-purple-950 text-center w-2/3 h-96 ">
          <div className="text-center flex flex-col gap-10">
            <h1 className="text-2xl dark:text-white">Skills</h1>
            <div className="flex flex-wrap justify-center gap-16">
              <img
                src={HTML_logo}
                alt="HTML"
                className="size-24 hover:scale-110 "
              />
              <img
                src={CSS_logo}
                alt="CSS"
                className="size-24 hover:scale-110"
              />
              <img
                src={React_logo}
                alt="React"
                className="size-24 hover:scale-110"
              />
              <img
                src={JavaScript_logo}
                alt="JavaScript"
                className="size-24 hover:scale-110"
              />
              <img
                src={Git_logo}
                alt="Git"
                className="size-24 hover:scale-110"
              />
              <img
                src={GitHub_logo}
                alt="GitHub"
                className="size-24 hover:scale-110"
              />
              <img
                src={Bootstrap_logo}
                alt="Bootstrap"
                className="size-24 hover:scale-110"
              />
              <img
                src={Material_UI_logo}
                alt="Material UI"
                className="size-24 hover:scale-110"
              />
              <img
                src={Redux_logo}
                alt="Redux"
                className="size-24 hover:scale-110"
              />
              <img
                src={Tailwindcss_logo}
                alt="Tailwind CSS"
                className="size-24 hover:scale-110"
              />
              <img
                src={TypeScript_logo}
                alt="TypeScript"
                className="size-24 hover:scale-110"
              />
              <img
                src={Vercel_logo}
                alt="Vercel"
                className="size-24 hover:scale-110"
              />
              <img
                src={Vite_logo}
                alt="Vite"
                className="size-24 hover:scale-110"
              />
              <img
                src={Webflow_logo}
                alt="Webflow"
                className="size-24 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
