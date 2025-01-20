import React from "react";
import Html_logo from "./Pic/Html_logo.png";
import CSS_logo from "./Pic/CSS_logo.png";
import Git_logo from "./Pic/Git_logo.png";
import Github_logo from "./Pic/Github_logo.png";
import Bootstrap_logo from "./Pic/Bootstrap_logo.png";
import Javascript_logo from "./Pic/Javascript_logo.png";
import Material_UI_logo from "./Pic/Material_UI_logo.png";
import React_logo from "./Pic/React_logo.png";
import Redux_logo from "./Pic/Redux_logo.png";
import TailwindCSS_logo from "./Pic/TailwindCSS_logo.png";
import TypeScript_logo from "./Pic/TypeScript_logo.png";
import Vercel_logo from "./Pic/Vercel_logo.png";
import Vite_logo from "./Pic/Vite_logo.png";
import Webflow_logo from "./Pic/Webflow_logo.png";

function Skills() {
  return (
    <>
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="flex items-center justify-center bg-orange-100 dark:bg-purple-950 text-center w-2/3 h-96 ">
          <div className="text-center flex flex-col gap-10">
            <h1 className="text-2xl dark:text-white">Skills</h1>
            <div className="flex flex-wrap justify-center gap-16">
              <img
                src={Html_logo}
                alt="Html"
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
                src={Javascript_logo}
                alt="Javascript"
                className="size-24 hover:scale-110"
              />
              <img
                src={Git_logo}
                alt="Git"
                className="size-24 hover:scale-110"
              />
              <img
                src={Github_logo}
                alt="Github"
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
                src={TailwindCSS_logo}
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
