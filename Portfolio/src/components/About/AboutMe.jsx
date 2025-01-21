import React, { useRef, useEffect, useState } from "react";
import Ali_Prof_Pic from "./Pic/Ali_Prof_Pic.jpg";
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
      {/* <div
        ref={elementRef}
        className={`transition-transform transform ${
          isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
        } duration-700 ease-in-out`}
      >
        <h1 className="font-eb-garamond text-6xl pt-20 pb-1 dark:text-white dark:font-bold">
          About Me
        </h1>
      </div> */}
      {/* <hr
        ref={elementRef}
        className={`border-black w-11/12 ml-14 transition-transform transform ${
          isVisible ? "animate-slideR" : "translate-y-10 opacity-0"
        } duration-700 ease-in-out dark:border-lines`}
      /> */}
      <div className="flex flex-row items-center pt-32">
        <div
          ref={elementRef}
          className={`flex justify-center border-r pt-10 pl-48 h- border-black w-1/2 transition-transform transform ${
            isVisible ? "animate-fadeIn" : "translate-y-10 opacity-0"
          } dark:border-lines`}
        >
          <img className="size-96 " src={Ali_Prof_Pic} alt="" />
        </div>
        <div className={`pl-12 pt- pb `}>
          <h1
            ref={elementRef}
            className={`text-left text-2xl font-eb-garamond pb-10 transition-transform transform ${
              isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
            } duration-700 ease-in-out dark:text-white dark:font-semibold dark:font-Montserrat`}
          >
            Ali Abdelfattah Saad
          </h1>
          <p
            ref={elementRef}
            className={`font-eb-garamond font-light text-left transition-transform transform w-100 leading-8 ${
              isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
            } duration-700 ease-in-out dark:text-white dark:font-Montserrat `}
          >
            Hi, I'm Ali, a front-end developer with 1+ years of experience in
            creating responsive, user-friendly web applications. My expertise
            includes React, JavaScript, and Tailwind CSS, and I have a solid
            foundation in web development, built through the ALX program, where
            I mastered advanced HTML, CSS, and ReactJS. I’m currently interning
            at Penta-b, where I’m gaining hands-on experience in solving
            real-world challenges, refining my problem-solving abilities, and
            collaborating effectively in a professional environment.
          </p>
          {/* <button
            ref={elementRef}
            className={`font-eb-garamond bg-Org hover:bg-black hover:text-Org flex font-light text-sm rounded-full shadow-md px-10 mt-5 py-3 transition-transform transform ${
              isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
            }duration-700 ease-in-out dark:bg-darklight 
             dark:shadow-none dark:border dark:border-lines dark:text-lines 
             dark:hover:bg-lines dark:hover:text-black`}
          >
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
