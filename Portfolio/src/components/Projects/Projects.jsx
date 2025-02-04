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
      <div className="bg-ferany dark:bg-projects flex flex-col items-center justify-center py-20 ">
        <div ref={elementRef} className="pb-10">
          <h1 className="lg:font-eb-garamond md:text-8xl text-4xl dark:text-white  dark:font-bold dark:font-Montserrat">
            Projects
          </h1>
        </div>

        <div className="flex lg:flex-row items-center justify-center gap-5 border border-black xl:w-[70%] lg:w-[90%] md:h-96 h-64 dark:border-lines">
          <div className="text-center flex flex-col gap-2">
            <h1 className="md:text-2xl dark:text-white">Movie Database</h1>
            <a href="https://capstone-project-five-delta.vercel.app/">
              <img
                src={Movie_Database}
                alt="Movie Database"
                className="md:w-96 md:h-72 w-72 h-48 lg:hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h1 className="md:text-2xl dark:text-white">Todo List</h1>
            <a href="https://react-todo-xi-umber.vercel.app/">
              <img
                src={TodoList}
                alt="Todo List"
                className="md:w-96 md:h-72 w-72 h-48 lg:hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
