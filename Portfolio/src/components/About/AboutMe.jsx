import React from "react";
import Profile_Pic from "./Pic/Profile_Pic.jpg";
function AboutMe() {
  return (
    <div className="flex flex-col justify-center gap-10 text-center">
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-col items-center lg:pt-20 pt-10">
        <h1 className="lg:text-left md:text-2xl text-xl font-eb-garamond border-b border-black dark:border-lines dark:text-white dark:font-semibold dark:font-Montserrat">
          Ali Abdelfattah Saad
        </h1>
        <div className="flex flex-col pt-2 md:gap-5 gap-3 lg:flex-row items-center justify-center">
          <div className="flex justify-center lg:border-r border-b lg:border-b-0 pb-5 lg:pr-5 border-black w-1/2  dark:border-lines">
            <img
              className="object-cover lg:size-96 md:size-56 "
              src={Profile_Pic}
              alt="Ali's Pic"
            />
          </div>
          <div>
            <p className="font-eb-garamondpt-2 lg:pt-0 text-left lg:text-base md:text-sm text-xs px-2 lg:w-100 md:w-[700px] justify-center lg:leading-8 md:leading-6 dark:text-white dark:font-Montserrat ">
              Hi, I'm Ali, a front-end developer with 1+ years of experience
              building responsive and dynamic web applications. I specialize in
              React, JavaScript, TypeScript, and Tailwind CSS, with strong
              skills in React Hooks, state management (Redux, Zustand,
              useContext), routing (React Router), and API integration (Axios,
              REST). I’m proficient in Git/GitHub and use Vite for fast
              development. Passionate about problem-solving, performance
              optimization, and creating intuitive user interfaces, I’m always
              eager to learn and deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-5">
        <a
          href="https://drive.google.com/file/d/1Q_jxi9DdfEGVa5khvBb6ZNVBHzxHohao/view?usp=drive_link"
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
