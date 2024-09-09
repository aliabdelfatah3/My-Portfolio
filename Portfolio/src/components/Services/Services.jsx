import React, { useRef, useEffect, useState } from "react";
function Services() {
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
      <div className="bg-ferany dark:bg-services flex flex-col items-start pt-16 pl-11 pb-64 ">
        <div
          ref={elementRef}
          className={`pb-16 transition-transform transform ${
            isVisible ? "animate-shortSlideUp" : "translate-y-10 opacity-0"
          } duration-700 ease-in-out`}
        >
          <h1 className="font-eb-garamond text-7xl dark:text-white dark:text-8xl dark:font-bold dark:font-Montserrat">
            Services
          </h1>
        </div>

        <div className="flex items-center border text-center border-black w-128 h-64 dark:border-lines">
          <div className="text-center w-full">
            <p className="font-eb-garamond text-lg items-center dark:text-white dark:font-Montserrat">
              Nothing to book right now. Check back soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
