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
      <div className="flex mb-60 pt-32 w-11/12  justify-evenly items-center relative text-center font-bold leading-5 ">
        <h1
          className="text-6xl w-96 font-light pt-16 font-eb-garamond border-sky-950 
        animate-slideUp dark:text-white dark:font-bold dark:font-Montserrat"
        >
          Discover My Work
        </h1>
        <div className="relative">
          <img className="mt-3 h-96 animate-fadeIn" src={Pic1} alt="" />
          <img
            className="absolute top-20 left-16 animate-fadeIn"
            src={MyPhoto}
            alt="My Photo"
          />
        </div>
        <div className="flex flex-col justify-center text-center pt-10 w-80 animate-slideUp">
          <p className="font-normal dark:text-white dark:font-Montserrat">
            Explore the creative projects showcasing my skills and passion for
            design.
          </p>
          <button
            onClick={handleClick}
            className="font-eb-garamond bg-Org hover:bg-black hover:text-Org
             transition-colors duration-500 flex justify-center text-center text-base 
             font-extralight rounded-full shadow-md mx-20 mt-5 py-3 dark:bg-darklight 
             dark:shadow-none dark:border dark:border-lines dark:text-lines 
             dark:hover:bg-lines dark:hover:text-black "
          >
            View Projects
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Home;
