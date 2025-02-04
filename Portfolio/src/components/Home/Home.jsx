import React from "react";
import { useNavigate } from "react-router-dom";
import Pic1 from "./HomePic/Pic1.png";
import MyPhoto from "./HomePic/MyPhoto.jpg";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <div className="relative flex">
        <div className="flex flex-col gap-8 md:gap-4 md:flex-row md:pt-32 w-full justify-center md:justify-evenly items-center text-center font-bold leading-5">
          <h1 className="text-3xl md:text-4xl lg:text-6xl w-full lg:w-96 md:w-80 font-light pt-16 md:pt-0 lg:pt-14 font-eb-garamond border-sky-950  dark:text-white dark:font-bold dark:font-Montserrat">
            Discover My Work
          </h1>
          <div className="">
            <div className="relative -translate-x-5">
              <img
                className="mt-3 md:h-96 h-48 animate-fadeIn"
                src={Pic1}
                alt="Solid Pic"
              />
              <img
                className="absolute md:h-96 w lg:top-20 top-10 lg:left-16 left-10 animate-fadeIn"
                src={MyPhoto}
                alt="My Photo"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center pt-12 w-full lg:w-80 md:w-72 ">
            <p className="font-normal lg:w-[250px] md:w-52 xl:w-auto dark:text-white dark:font-Montserrat">
              Explore the creative projects showcasing my skills and passion for
              design.
            </p>
            <button
              onClick={handleClick}
              className="font-eb-garamond w-[160px] bg-Org hover:bg-black hover:text-Org transition-colors duration-500 flex justify-center text-center font-extralight rounded-full shadow-md mt-5 py-3 dark:bg-darklight dark:shadow-none dark:border dark:border-lines dark:text-lines dark:hover:bg-lines dark:hover:text-black"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
