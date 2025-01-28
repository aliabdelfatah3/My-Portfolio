import React from "react";
import Ali_Prof_Pic from "./Pic/Ali_Prof_Pic.jpg";
function AboutMe() {
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="flex flex-row items-center pt-32">
        <div
          className={`flex justify-center border-r pt-10 pl-48 h- border-black w-1/2  dark:border-lines`}
        >
          <img className="size-96 " src={Ali_Prof_Pic} alt="Ali's Pic" />
        </div>
        <div className={`pl-12 pt- pb `}>
          <h1
            className={`text-left text-2xl font-eb-garamond pb-10   dark:text-white dark:font-semibold dark:font-Montserrat`}
          >
            Ali Abdelfattah Saad
          </h1>
          <p
            className={`font-eb-garamond font-light text-left  w-100 leading-8 dark:text-white dark:font-Montserrat `}
          >
            Hi, I'm Ali, a front-end developer with 1+ years of experience
            crafting responsive and dynamic web applications. I specialize in
            modern technologies, including React, JavaScript, TypeScript,
            Tailwind CSS, Bootstrap, and Material UI (MUI), ensuring seamless
            and user-friendly designs. My technical toolkit also includes state
            management tools like Redux and Zustand, efficient routing with
            React Router, and API handling with Axios and REST APIs. I'm
            proficient in Git and GitHub for version control, and I leverage
            Vite for fast development and Vercel for seamless deployment.
            Additionally, I have experience with Webflow for building visually
            stunning websites. I’m passionate about solving problems, optimizing
            performance, and creating intuitive user interfaces that enhance the
            web experience. Always eager to learn and adapt, I strive to deliver
            impactful solutions through innovation and collaboration.
          </p>
        </div>
      </div>
      <div>
        <button
          className={`font-eb-garamond w-[170px]  uppercase bg-Org hover:bg-black hover:text-Org font-light text-sm rounded-full shadow-md px-10 mt-5 py-3  dark:bg-darklight 
              dark:shadow-none dark:border dark:border-lines dark:text-lines 
              dark:hover:bg-lines dark:hover:text-black`}
        >
          <a
            href="https://drive.google.com/file/d/1uouTcmwA_oUIEaMq_DBBZVsThsCebbLs/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            updated cv
          </a>
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
