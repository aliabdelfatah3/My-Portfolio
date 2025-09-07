import React from "react";
import Phone_Darkmode from "./Logos/Phone_Darkmode.png";
import Phone_Lightmode from "./Logos/Phone_Lightmode.png";
import Gmail_Darkmode from "./Logos/Gmail_Darkmode.png";
import Gmail_Lightmode from "./Logos/Gmail_Lightmode.png";
import Github_Darkmode from "./Logos/Github_Darkmode.png";
import Github_Lightmode from "./Logos/Github_Lightmode.png";
import LinkedIn_Darkmode from "./Logos/LinkedIn_Darkmode.png";
import LinkedIn_Lightmode from "./Logos/LinkedIn_Lightmode.png";

function ContactMe() {
  const contacts = [
    {
      href: "tel:+201011624638",
      label: "+20 101 162 4638",
      darkIcon: Phone_Darkmode,
      lightIcon: Phone_Lightmode,
    },
    {
      href: "mailto:aliabdelfatah455@gmail.com",
      label: "aliabdelfatah455@gmail.com",
      darkIcon: Gmail_Darkmode,
      lightIcon: Gmail_Lightmode,
    },
    {
      href: "https://github.com/aliabdelfatah3",
      label: "GitHub",
      darkIcon: Github_Darkmode,
      lightIcon: Github_Lightmode,
    },
    {
      href: "https://www.linkedin.com/in/ali-abdelfattah-3looloo-866b91198",
      label: "LinkedIn",
      darkIcon: LinkedIn_Darkmode,
      lightIcon: LinkedIn_Lightmode,
    },
  ];

  return (
    <div className="w-full h-5/6 flex justify-center items-center">
      <div
        className="m-4 sm:m-6 lg:m-0 
                   flex flex-col items-center justify-center 
                   bg-white shadow-2xl dark:bg-purple-950 text-center 
                   w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 
                   h-auto sm:h-[500px] md:h-[600px] 
                   rounded-lg p-4 sm:p-6 transform transition-all duration-500"
      >
        <div className="text-black dark:text-white">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500">
            Contact Me
          </h1>
          <p className="text-center w-full max-w-[90%] sm:max-w-[450px] mx-auto text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Feel free to reach out to me for any inquiries, collaborations, or
            feedback. I’m always open to connecting and would love to hear from
            you! You can contact me via phone or email, and I’ll get back to you
            as soon as possible.
          </p>
        </div>

        {/* Mapping */}
        <div className="flex flex-col gap-4 sm:gap-6 mt-6">
          {contacts.map(({ href, label, darkIcon, lightIcon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-blue-500 lg:hover:underline items-center gap-2 sm:gap-3 text-base sm:text-lg"
            >
              <img
                src={darkIcon}
                alt={`${label}_dark`}
                className="hidden dark:block size-5 sm:size-7"
              />
              <img
                src={lightIcon}
                alt={`${label}_light`}
                className="dark:hidden size-5 sm:size-7"
              />
              <span className="font-semibold">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
