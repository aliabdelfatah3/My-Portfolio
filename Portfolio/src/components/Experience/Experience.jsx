import { useEffect, useRef } from "react";

function Experience() {
  const experiences = [
    {
      role: "Front-End Web Developer (FullTime)",
      company: "Corpintech",
      date: "Oct 2025 - Present",
      description: "Worked on building and styling responsive web pages using HTML, CSS, JavaScript, and Tailwind CSS. Contributed to developing user-friendly interfaces and implementing interactive features. Collaborated with the team to debug issues, improve UI/UX, and maintain clean, reusable code."
    },
    {
      role: "Front-End Web Developer (Internship)",
      company: "Corpintech",
      date: "Sep 2025 - Oct 2025",
      description: "Worked on building and styling responsive web pages using HTML, CSS, JavaScript, and Tailwind CSS. Contributed to developing user-friendly interfaces and implementing interactive features."
    },
    {
      role: "Front-End Web Developer (Internship)",
      company: "Penta-b",
      date: "Oct 2024 - Jan 2025",
      description: "Developed and maintained web applications using React and JavaScript. Focused on troubleshooting issues, debugging, and optimizing code. Gained hands-on experience in code tracing, analyzing complex codebases, and identifying areas for improvement."
    }
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const cards = node.querySelectorAll(".timeline-card");

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
        <h1 className="text-3xl md:text-5xl font-syne font-bold text-accent-primary dark:text-accent-secondary mb-16 tracking-tight">
          Professional Experience
        </h1>

        <div ref={timelineRef} className="relative w-full max-w-4xl text-left">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent opacity-30"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${isLeft ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary dark:bg-accent-secondary z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform duration-300"></div>

                  {/* Content Card with scroll reveal */}
                  <div
                    className="timeline-card w-full md:w-[45%] bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-accent-primary/50 dark:group-hover:border-accent-secondary/50"
                    data-delay={index * 180}
                    style={{
                      opacity: 0,
                      transform: isLeft ? "translateX(40px)" : "translateX(-40px)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                    }}
                  >
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="font-bold text-lg md:text-xl text-light-text-primary dark:text-dark-text-primary font-syne">
                        {exp.company}
                      </span>
                      <span className="text-accent-primary dark:text-accent-secondary font-inter text-sm md:text-base font-semibold">
                        {exp.date}
                      </span>
                    </div>

                    <h2 className="font-semibold text-lg text-light-text-secondary dark:text-dark-text-primary font-inter mb-3">
                      {exp.role}
                    </h2>
                    <p className="text-sm lg:text-base leading-relaxed text-light-text-secondary dark:text-dark-text-secondary font-inter">
                      {exp.description}
                    </p>
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

export default Experience;
