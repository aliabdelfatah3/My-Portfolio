import { useEffect, useRef } from "react";

function Education() {
  const educations = [
    {
      degree: "Bachelor's Degree in Computer Science and Information System",
      institution: "6 October University",
      date: "Graduated",
      details: ""
    },
    {
      degree: "Front-End Web Developer Course",
      institution: "ALX Africa",
      date: "Mar 2024 - Oct 2024",
      details: "Mastered HTML, CSS, JavaScript, TypeScript, React.js, and Tailwind CSS. Gained proficiency in version control, API integration, and front-end frameworks."
    }
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const cards = node.querySelectorAll(".edu-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const delay = parseInt(card.dataset.delay || "0", 10);
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateX(0) translateY(0)";
            }, delay);
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-12 text-center px-4 w-full max-w-7xl mx-auto pt-20 pb-16">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-syne font-bold text-accent-secondary dark:text-accent-tertiary mb-16 tracking-tight">
          Education &amp; Courses
        </h1>

        <div ref={timelineRef} className="relative w-full max-w-4xl text-left">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-secondary via-accent-tertiary to-transparent opacity-30"></div>

          <div className="flex flex-col gap-12">
            {educations.map((edu, index) => {
              const isLeft = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${isLeft ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-secondary dark:bg-accent-tertiary z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)] group-hover:scale-150 transition-transform duration-300"></div>

                  {/* Content Card with scroll reveal */}
                  <div
                    className="edu-card w-full md:w-[45%] glass bg-light-card/80 dark:bg-dark-card/80 p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-accent-secondary/50 dark:group-hover:border-accent-tertiary/50"
                    data-delay={index * 180}
                    style={{
                      opacity: 0,
                      transform: isLeft ? "translateX(40px)" : "translateX(-40px)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                    }}
                  >
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="font-bold text-lg md:text-xl text-light-text-primary dark:text-dark-text-primary font-syne">
                        {edu.institution}
                      </span>
                      <span className="text-accent-secondary dark:text-accent-tertiary font-inter text-sm md:text-base font-semibold">
                        {edu.date}
                      </span>
                    </div>

                    <h2 className="font-semibold text-lg text-light-text-secondary dark:text-dark-text-primary font-inter mb-3">
                      {edu.degree}
                    </h2>
                    {edu.details && (
                      <p className="text-sm lg:text-base leading-relaxed text-light-text-secondary dark:text-dark-text-secondary font-inter">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
