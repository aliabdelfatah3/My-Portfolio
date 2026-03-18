import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import About_Pic from "./Pic/About_Pic.png";

const STATS = [
  { label: "Years of Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 4, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Cups of Tea", value: 99, suffix: "+" },
];

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ stat, started }) {
  const count = useCountUp(stat.value, 1500, started);
  return (
    <div className="flex flex-col items-center gap-1 group">
      <span className="text-3xl md:text-4xl font-bold font-syne text-gradient tabular-nums">
        {count}{stat.suffix}
      </span>
      <span className="text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary font-inter text-center leading-tight">
        {stat.label}
      </span>
    </div>
  );
}

StatCard.propTypes = {
  stat: PropTypes.shape({
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  started: PropTypes.bool.isRequired,
};

function AboutMe() {
  const statsRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-10 text-center px-4 md:px-12 max-w-7xl mx-auto pt-20">
      <div className="flex flex-col gap-12 items-center">
        <h1 className="text-3xl md:text-5xl font-syne font-bold text-accent-primary dark:text-accent-secondary tracking-tight">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
          {/* Image Container */}
          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 bg-accent-primary dark:bg-accent-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              className="relative object-cover w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl ring-1 ring-light-border dark:ring-dark-border z-10"
              src={About_Pic}
              alt="Ali Abdelfattah"
            />
          </div>

          {/* Text Container */}
          <div className="lg:max-w-2xl w-full text-left flex flex-col items-start gap-8">
            <p className="font-inter text-base md:text-lg lg:text-xl leading-relaxed text-light-text-secondary dark:text-dark-text-secondary">
              I am a passionate <span className="font-semibold text-light-text-primary dark:text-dark-text-primary">Frontend Developer</span> proficient in modern web technologies including HTML, CSS, JavaScript, TypeScript, React.js (Zustand), and Angular (RxJS). 
              <br/><br/>
              Skilled in building user-focused, responsive, and highly scalable web applications, I leverage powerful styling tools like TailwindCSS to craft visually stunning interfaces. Experienced in version control with Git, I am dedicated to delivering clean, maintainable code and innovative solutions that optimize performance, enhance the user experience, and drive business success.
            </p>

            {/* Stats Row */}
            <div
              ref={statsRef}
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 px-4 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-inner"
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} stat={stat} started={started} />
              ))}
            </div>

            <div className="flex justify-center lg:justify-start w-full">
              <a
                href="https://drive.google.com/file/d/1Q_jxi9DdfEGVa5khvBb6ZNVBHzxHohao/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-light-text-primary hover:bg-accent-primary dark:bg-dark-card-hover dark:hover:bg-accent-secondary rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
