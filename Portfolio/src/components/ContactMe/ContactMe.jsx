import React from "react";
import Phone_Darkmode from "./Logos/Phone_Darkmode.png";
import Phone_lightmode from "./Logos/Phone_lightmode.png";
import Gmail from "./Logos/Gmail.png";
import Github_Darkmode from "./Logos/Github_Darkmode.png";
import Github_lightmode from "./Logos/Github_lightmode.png";
import LinkedIn_Darkmode from "./Logos/LinkedIn_Darkmode.png";
import LinkedIn_lightmode from "./Logos/LinkedIn_lightmode.png";

function ContactMe() {
  const phoneNumber = "+201011624638";

  return (
    <>
      <div className="w-full h-5/6 flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center bg-white shadow-2xl dark:bg-purple-950 text-center w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-auto sm:h-[500px] md:h-[600px] rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <div className="text-black dark:text-white">
            <h1 className="text-4xl font-semibold text-center mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500">
              Contact Me
            </h1>
            <p className="text-center w-full md:w-[450px] mx-auto text-lg text-gray-700 dark:text-gray-300">
              Feel free to reach out to me for any inquiries, collaborations, or
              feedback. I’m always open to connecting and would love to hear
              from you! You can contact me via phone or email, and I’ll get back
              to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <a
              href={`tel:${phoneNumber}`}
              className="flex text-blue-500 items-center gap-3 text-lg hover:text-blue-700 transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={Phone_Darkmode}
                alt="Phone_Darkmode"
                className="hidden dark:block size-7"
              />
              <img
                src={Phone_lightmode}
                alt="Phone_lightmode"
                className="dark:hidden size-7"
              />
              <span className="font-semibold">01011624638</span>
            </a>
            <a
              href="mailto:aliabdelfatah455@gmail.com"
              className="flex text-blue-500 gap-3 text-lg hover:text-blue-700 transform transition-all duration-300 hover:scale-105"
            >
              <img src={Gmail} alt="Gmail" className="size-7" />
              <span className="font-semibold">aliabdelfatah455@gmail.com</span>
            </a>
            <a
              href="https://github.com/aliabdelfatah3"
              className="flex text-blue-500 gap-3 text-lg hover:text-blue-700 transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={Github_Darkmode}
                alt="Github_Darkmode"
                className="hidden dark:block size-7"
              />
              <img
                src={Github_lightmode}
                alt="Github_lightmode"
                className="dark:hidden size-7"
              />
              <span className="font-semibold">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-abdelfattah-3looloo-866b91198"
              className="flex text-blue-500 gap-3 text-lg hover:text-blue-700 transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={LinkedIn_Darkmode}
                alt="LinkedIn_Darkmode"
                className="hidden dark:block size-7"
              />
              <img
                src={LinkedIn_lightmode}
                alt="LinkedIn_lightmode"
                className="dark:hidden size-7"
              />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
