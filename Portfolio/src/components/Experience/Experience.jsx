const experience = [
  {
    title: "Front-End Web Developer (Full-time)",
    label: "Corpintech - Oct 2025 to Present",
    copy: "Build and refine responsive web pages with HTML, CSS, JavaScript, and Tailwind CSS. Contribute to interactive UI features, debugging, UX improvements, and reusable frontend patterns for production work.",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Front-End Web Developer (Internship)",
    label: "Corpintech - Sep 2025 to Oct 2025",
    copy: "Supported responsive page development, component styling, and interactive frontend behavior while strengthening collaboration, delivery habits, and UI implementation quality.",
    tags: ["Responsive UI", "JavaScript", "Team delivery"],
  },
  {
    title: "Front-End Web Developer (Internship)",
    label: "Penta-b - Oct 2024 to Jan 2025",
    copy: "Developed and maintained React and JavaScript application features. Focused on troubleshooting, debugging, code tracing, reading complex codebases, and identifying practical improvements.",
    tags: ["React", "Debugging", "Code tracing"],
  },
];

function Experience() {
  return (
    <div className="border-y border-dark-border bg-[#030B0E] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-primary">
            Journey
          </p>
          <h2 className="font-syne text-4xl font-bold tracking-[-0.025em] text-dark-text-primary sm:text-5xl">
            Work experience
          </h2>
          <div className="mt-8 grid gap-3">
            <div className="rounded-2xl border border-dark-border bg-dark-card p-5">
              <p className="font-syne text-3xl font-bold text-accent-primary">
                1+
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-dark-text-secondary">
                Years of experience
              </p>
            </div>
            <div className="rounded-2xl border border-dark-border bg-dark-card p-5">
              <p className="font-syne text-3xl font-bold text-accent-primary">
                5+
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-dark-text-secondary">
                Projects completed
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-accent-primary/35 sm:block" />
          <div className="grid gap-5">
            {experience.map((item) => (
              <article
                key={item.title}
                className="relative rounded-[1.35rem] border border-dark-border bg-dark-card p-6 shadow-[0_22px_65px_rgba(0,0,0,0.2)] sm:ml-10"
              >
                <span className="absolute -left-[2.95rem] top-7 hidden h-3 w-3 rounded-full bg-accent-primary shadow-[0_0_20px_rgba(25,184,242,0.8)] sm:block" />
                <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-accent-secondary">
                  {item.label}
                </p>
                <h3 className="mt-2 font-syne text-2xl font-bold tracking-[-0.02em] text-dark-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-dark-text-secondary sm:text-base">
                  {item.copy}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-dark-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
