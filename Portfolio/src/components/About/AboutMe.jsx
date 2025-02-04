import React from "react";
import Ali_Prof_Pic from "./Pic/Ali_Prof_Pic.jpg";
function AboutMe() {
  return (
    <div className="flex flex-col justify-center gap-2 text-center">
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-col items-center lg:pt-20 pt-10">
        <h1 className="lg:text-left md:text-2xl text-xl font-eb-garamond border-b border-black dark:border-lines dark:text-white dark:font-semibold dark:font-Montserrat">
          Ali Abdelfattah Saad
        </h1>
        <div className="flex flex-col pt-2 md:gap-5 gap-3 lg:flex-row items-center justify-center">
          <div className="flex justify-center lg:border-r border-b lg:border-b-0 pb-5 lg:pr-5 border-black w-1/2  dark:border-lines">
            <img
              className="lg:size-96 md:size-56 "
              src={Ali_Prof_Pic}
              alt="Ali's Pic"
            />
          </div>
          <div className="">
            <p className="font-eb-garamondpt-2 lg:pt-0 text-left lg:text-base md:text-sm text-xs px-2 lg:w-100 md:w-[700px] justify-center lg:leading-8 md:leading-6 dark:text-white dark:font-Montserrat ">
              Hi, I'm Ali, a front-end developer with 1+ years of experience
              crafting responsive and dynamic web applications. I specialize in
              modern technologies, including React, JavaScript, TypeScript,
              Tailwind CSS, Bootstrap, and Material UI (MUI), ensuring seamless
              and user-friendly designs. My technical toolkit also includes
              state management tools like Redux and Zustand, efficient routing
              with React Router, and API handling with Axios and REST APIs. I'm
              proficient in Git and GitHub for version control, and I leverage
              Vite for fast development and Vercel for seamless deployment.
              Additionally, I have experience with Webflow for building visually
              stunning websites. I’m passionate about solving problems,
              optimizing performance, and creating intuitive user interfaces
              that enhance the web experience. Always eager to learn and adapt,
              I strive to deliver impactful solutions through innovation and
              collaboration.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-5">
        <a
          href="https://drive.google.com/file/d/1uouTcmwA_oUIEaMq_DBBZVsThsCebbLs/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="font-eb-garamond w-[100px] bg-Org lg:hover:bg-black lg:hover:text-Org font-extralight transition-colors duration-500 rounded-full shadow-md  py-2.5  dark:bg-darklight 
              dark:shadow-none dark:border dark:border-lines dark:text-lines 
              lg:dark:hover:bg-lines lg:dark:hover:text-black"
          >
            CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
