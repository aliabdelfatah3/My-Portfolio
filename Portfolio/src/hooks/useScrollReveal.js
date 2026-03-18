import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal - A hook that returns a ref and a boolean `isVisible`.
 * When the element attached to the ref scrolls into the viewport,
 * `isVisible` becomes true, triggering entry animations.
 *
 * @param {number} threshold - How much of the element must be visible (0.0 - 1.0)
 * @param {string} rootMargin - Margin around the root to expand/contract the viewport
 */
const useScrollReveal = (threshold = 0.1, rootMargin = "0px 0px -60px 0px") => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (fire once)
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useScrollReveal;
