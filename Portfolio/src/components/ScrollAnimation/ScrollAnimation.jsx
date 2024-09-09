import React, { useRef, useEffect, useState } from "react";

const ScrollAnimation = ({ children }) => {
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
    <div
      ref={elementRef}
      className={`transition-transform transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } duration-700 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
