const skills = [
  { name: "HTML, CSS, and responsive layout", level: 94, group: "Frontend" },
  { name: "JavaScript and TypeScript", level: 90, group: "Language" },
  { name: "React.js, Zustand, and Redux", level: 88, group: "Framework" },
  { name: "Angular and RxJS", level: 80, group: "Framework" },
  { name: "Tailwind CSS, Bootstrap, Material UI", level: 90, group: "Interface" },
  { name: "Git, GitHub, Vite, and Vercel", level: 86, group: "Workflow" },
];

const tools = [
  "React",
  "TypeScript",
  "JavaScript",
  "Angular",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "RxJS",
  "REST APIs",
  "Vite",
  "Vercel",
  "Git",
  "GitHub",
  "Material UI",
  "Bootstrap",
  "Webflow",
  "MySQL",
  "PHP",
];

function Skills() {
  return (
    <div className="border-y border-dark-border bg-[#061216] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-primary">
            My expertise
          </p>
          <h2 className="font-syne text-4xl font-bold leading-tight tracking-[-0.025em] text-dark-text-primary sm:text-5xl">
            Skills & technologies
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-dark-text-secondary">
            A modern frontend stack for building responsive product screens,
            reusable components, API-connected flows, and maintainable
            deployment-ready interfaces.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-dark-border bg-dark-card p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-accent-secondary">
                    {skill.group}
                  </p>
                  <h3 className="mt-1 font-syne text-lg font-semibold tracking-[-0.01em] text-dark-text-primary">
                    {skill.name}
                  </h3>
                </div>
                <span className="font-mono text-sm font-semibold tabular-nums text-accent-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#0C2732]">
                <div
                  className="h-full rounded-full bg-accent-primary shadow-[0_0_18px_rgba(25,184,242,0.45)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1.5 text-xs font-semibold text-dark-text-secondary"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
