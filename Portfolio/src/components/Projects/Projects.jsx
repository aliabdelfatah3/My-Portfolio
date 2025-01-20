import React, { useRef, useEffect, useState } from "react";
import Movie_Database from "./Pic/Movie_Database.png";
import TodoList from "./Pic/TodoList.png";
function Projects() {
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
    <>
      <div className="bg-ferany dark:bg-projects flex flex-col items-center justify-center pt-52 pl-11 pb-64 ">
        <div
          ref={elementRef}
          className={`pb-10 transition-transform transform ${
            isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
          } duration-700 ease-in-out`}
        >
          <h1 className="font-eb-garamond text-8xl dark:text-white dark:text-8xl dark:font-bold dark:font-Montserrat">
            Projects
          </h1>
        </div>

        <div className="flex items-center justify-center gap-5 border text-center border-black w-3/5 h-96 dark:border-lines">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-2xl dark:text-white">Movie Database</h1>
            <a href="https://capstone-project-five-delta.vercel.app/">
              <img
                src={Movie_Database}
                alt="Movie Database"
                className="w-96 h-72 hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-2xl dark:text-white">Todo List</h1>
            <a href="https://react-todo-xi-umber.vercel.app/">
              <img
                src={TodoList}
                alt="Todo List"
                className="w-96 h-72 hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
