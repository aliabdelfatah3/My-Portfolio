const education = [
  {
    title: "Bachelor's Degree in Computer Science and Information Systems",
    meta: "6 October University - Graduated",
    copy: "Built an academic foundation in computer science, software fundamentals, databases, and information systems.",
  },
  {
    title: "Front-End Web Developer Course",
    meta: "ALX Africa - Mar 2024 to Oct 2024",
    copy: "Completed practical training across HTML, CSS, JavaScript, TypeScript, React.js, Tailwind CSS, version control, API integration, and frontend project delivery.",
  },
];

function Education() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-primary">
            Foundation
          </p>
          <h2 className="font-syne text-4xl font-bold tracking-[-0.025em] text-light-text-primary dark:text-dark-text-primary sm:text-5xl">
            Education & growth
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-light-text-secondary dark:text-dark-text-secondary">
          A practical learning path focused on software fundamentals, modern
          frontend development, and stronger product implementation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.35rem] border border-dark-border bg-dark-card p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-accent-secondary">
              {item.meta}
            </p>
            <h3 className="mt-2 font-syne text-2xl font-bold tracking-[-0.02em] text-dark-text-primary">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-dark-text-secondary">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Education;
