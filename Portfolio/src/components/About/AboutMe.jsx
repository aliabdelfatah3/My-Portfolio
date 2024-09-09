import React, { useRef, useEffect, useState } from "react";
function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col justify-center text-center">
      <div
        ref={elementRef}
        className={`transition-transform transform ${
          isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
        } duration-700 ease-in-out`}
      >
        <h1 className="font-eb-garamond text-6xl pt-20 pb-16 dark:text-white dark:font-bold">
          About Me
        </h1>
      </div>
      <hr
        ref={elementRef}
        className={`border-black w-11/12 ml-14 transition-transform transform ${
          isVisible ? "animate-slideR" : "translate-y-10 opacity-0"
        } duration-700 ease-in-out dark:border-lines`}
      />
      <div className="flex flex-row items-center  ">
        <div
          ref={elementRef}
          className={`border-r pt-10 pb-72 pl-32 border-black h-full w-1/2 transition-transform transform ${
            isVisible ? "animate-fadeIn" : "translate-y-10 opacity-0"
          } dark:border-lines`}
        >
          <img
            className="absolute w-72 h-128"
            src="src\components\About\Pic\1.png"
            alt=""
          />
          <img
            className="relative size-60 top-60 left-44"
            src="src\components\About\Pic\2.png"
            alt=""
          />
        </div>
        <div className={`pl-12 pb-28 w-4/12`}>
          <h1
            ref={elementRef}
            className={`text-left text-2xl font-eb-garamond pb-10 transition-transform transform ${
              isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
            } duration-700 ease-in-out dark:text-white dark:font-semibold dark:font-Montserrat`}
          >
            Creative Developer
          </h1>
          <p
            ref={elementRef}
            className={`font-eb-garamond font-light text-left transition-transform transform ${
              isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
            } duration-700 ease-in-out dark:text-white dark:font-Montserrat dark:w-80`}
          >
            3looloo is a portfolio of a dedicated and innovative developer,
            specializing in creating unique digital experiences. With a focus on
            user-centric design and cutting-edge technologies, I aim to bring
            ideas to life and deliver impactful solutions. My expertise includes
            web development and interactive experiences
            that elevate brands and engage audiences.
          </p>
          <button
            ref={elementRef}
            className={`font-eb-garamond bg-Org hover:bg-black hover:text-Org flex font-light text-sm rounded-full shadow-md px-10 mt-5 py-3 transition-transform transform ${
              isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
            }duration-700 ease-in-out dark:bg-darklight 
             dark:shadow-none dark:border dark:border-lines dark:text-lines 
             dark:hover:bg-lines dark:hover:text-black`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
