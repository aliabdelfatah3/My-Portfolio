import React from "react";
import Profile_Pic from "./Pic/Profile_Pic.jpg";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center gap-10 text-center px-4">
      <div className="flex flex-col gap-6 lg:gap-10 items-center lg:pt-16 pt-10">
        {/* الاسم */}
        <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-eb-garamond border-b border-black dark:border-lines dark:text-white dark:font-semibold dark:font-Montserrat">
          Ali Abdelfattah Saad
        </h1>

        {/* الصورة + النص */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full">
          {/* الصورة */}
          <div className="flex justify-center lg:border-r border-b lg:border-b-0 pb-5 lg:pr-8 border-black dark:border-lines">
            <img
              className="object-cover xl:size-96 lg:size-72 md:size-56 size-40 rounded-md"
              src={Profile_Pic}
              alt="Ali's Pic"
            />
          </div>

          {/* النص */}
          <div className="lg:max-w-[650px] md:max-w-[500px] w-full text-left flex flex-col items-start">
            <p className="font-eb-garamond xl:text-xl lg:text-lg md:text-base text-sm xl:leading-9 lg:leading-7 md:leading-6 leading-5 dark:text-white dark:font-Montserrat">
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

            {/* زرار الـ CV */}
            <div className="mt-4 flex justify-center lg:justify-start w-full">
              <a
                href="https://drive.google.com/file/d/1Q_jxi9DdfEGVa5khvBb6ZNVBHzxHohao/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <button className="font-eb-garamond w-[100px] bg-Org lg:hover:bg-black lg:hover:text-Org font-light transition-colors duration-500 rounded-full shadow-md py-2.5 dark:bg-darklight dark:shadow-none dark:border dark:border-lines dark:text-lines lg:dark:hover:bg-lines lg:dark:hover:text-black">
                  CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
