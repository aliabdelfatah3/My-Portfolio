import { useState, useEffect } from "react";
import Pic1 from "./HomePic/Pic1.png";
import Home_Pic from "./HomePic/Home_Pic.png";

const ROLES = [
  "Front-End Developer",
  "React Developer",
  "Angular Developer",
  "UI/UX Enthusiast",
];

function useTypewriter(
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseMs = 1800,
) {
  const [state, setState] = useState({
    displayed: "",
    wordIndex: 0,
    isDeleting: false,
    isPausing: false,
  });

  useEffect(() => {
    const { displayed, wordIndex, isDeleting, isPausing } = state;
    const current = words[wordIndex % words.length];

    // Pause after full word is typed
    if (isPausing) {
      const t = setTimeout(() => {
        setState((s) => ({ ...s, isDeleting: true, isPausing: false }));
      }, pauseMs);
      return () => clearTimeout(t);
    }

    if (!isDeleting) {
      // Type next character
      const next = current.slice(0, displayed.length + 1);
      const t = setTimeout(() => {
        setState((s) => ({
          ...s,
          displayed: next,
          isPausing: next === current, // finished typing → pause
        }));
      }, typingSpeed);
      return () => clearTimeout(t);
    } else {
      // Delete a character
      const next = current.slice(0, displayed.length - 1);
      const t = setTimeout(() => {
        setState((s) => ({
          ...s,
          displayed: next,
          isDeleting: next.length > 0,
          wordIndex:
            next.length === 0 ? (s.wordIndex + 1) % words.length : s.wordIndex,
        }));
      }, deletingSpeed);
      return () => clearTimeout(t);
    }
  }, [state, words, typingSpeed, deletingSpeed, pauseMs]);

  return state.displayed;
}

function Home() {
  const typedText = useTypewriter(ROLES);

  const handleClick = () => {
    window.location.href = "#projects";
  };

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 dark:bg-accent-secondary/10 blur-3xl rounded-full -z-10 animate-pulse-glow pointer-events-none"></div>

      <div className="relative z-10 flex flex-col-reverse items-center justify-between w-full gap-12 px-6 lg:flex-row max-w-7xl md:px-12 lg:gap-8">
        {/* Text Content */}
        <div className="flex flex-col w-full gap-6 text-center lg:w-1/2 lg:text-left animate-slideUp">
          <div className="space-y-2">
            <h2 className="text-xl font-light tracking-wider uppercase md:text-2xl text-accent-primary dark:text-accent-secondary font-syne">
              Hello, I am
            </h2>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl font-syne text-gradient">
              Ali Abdelfattah
            </h1>
            {/* Typing effect */}
            <h3 className="text-2xl md:text-3xl font-medium text-light-text-secondary dark:text-dark-text-secondary font-inter mt-4 min-h-[2.5rem] flex items-center justify-center lg:justify-start gap-0.5">
              <span>{typedText}</span>
              <span className="inline-block w-[2px] h-7 md:h-8 bg-accent-primary dark:bg-accent-secondary ml-1 animate-[blink_0.75s_step-end_infinite]" />
            </h3>
          </div>

          <p className="max-w-xl mx-auto text-base font-normal leading-relaxed md:text-lg text-light-text-secondary dark:text-dark-text-secondary lg:mx-0">
            I craft user-focused, responsive, and highly scalable web
            applications leveraging the power of modern technologies to bring
            ambitious designs to life.
          </p>

          <div className="flex justify-center pt-4 lg:justify-start">
            <button
              onClick={handleClick}
              className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-premium-gradient bg-[length:200%_auto] hover:bg-right rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
            >
              Explore My Work
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex items-center justify-center w-full lg:w-1/2 lg:animate-float">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Image Glow/Backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary opacity-20 blur-2xl animate-pulse-glow"></div>

            <img
              className="absolute z-10 object-contain w-full h-full drop-shadow-2xl"
              src={Home_Pic}
              alt="Ali Abdelfattah"
            />

            <img
              className="absolute -z-10 w-[110%] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] object-contain opacity-50 dark:opacity-80 mix-blend-multiply dark:mix-blend-screen"
              src={Pic1}
              alt="Decorative Background"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
