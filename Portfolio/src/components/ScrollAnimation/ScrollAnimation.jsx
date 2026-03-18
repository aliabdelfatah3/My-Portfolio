import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

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

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
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

ScrollAnimation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollAnimation;
