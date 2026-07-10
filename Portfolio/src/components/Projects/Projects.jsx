import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Movie Database",
    type: "API web app",
    link: "https://capstone-project-five-delta.vercel.app/",
    desc: "Responsive movie discovery app for searching and browsing public API data, with a Swiper carousel and optimized fetching through React Query.",
    tags: ["React", "React Query", "Swiper"],
    tone: "cyan",
  },
  {
    title: "HexaShop",
    type: "E-commerce platform",
    link: "https://e-commerce-nu-eight-64.vercel.app/",
    desc: "Full-stack e-commerce application built with React 19 and .NET 8, featuring Zustand state, React Query fetching, JWT authentication, cart persistence, and order tracking.",
    tags: ["React", ".NET 8", "Zustand"],
    tone: "teal",
  },
  {
    title: "Angular Post CRUD",
    type: "Angular app",
    link: "https://post-crud-8s4yvyeiq-3looloos-projects.vercel.app/",
    desc: "Angular 19+ CRUD application for managing REST API data, with RxJS-driven state, custom pagination, and a Tailwind CSS interface.",
    tags: ["Angular", "RxJS", "TailwindCSS"],
    tone: "amber",
  },
  {
    title: "Mini Shopify",
    type: "Commerce prototype",
    link: "https://mini-shopify.vercel.app/",
    desc: "Compact e-commerce prototype with product browsing, cart management, and checkout flow, built with modular Tailwind CSS.",
    tags: ["Commerce", "Cart", "TailwindCSS"],
    tone: "teal",
  },
  {
    title: "Todo List",
    type: "Productivity app",
    link: "https://react-todo-xi-umber.vercel.app/",
    desc: "Focused task management app with add, delete, and completion toggle interactions built around simple React state.",
    tags: ["React", "State", "CRUD"],
    tone: "cyan",
  },
];

function Preview({ tone }) {
  const palettes = {
    cyan: "from-accent-primary/30 to-[#0B2630]",
    teal: "from-accent-secondary/30 to-[#0A2A27]",
    amber: "from-accent-tertiary/30 to-[#2B2412]",
  };

  return (
    <div className={`relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br ${palettes[tone]}`}>
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <div className="absolute inset-x-5 top-12 rounded-xl border border-white/10 bg-[#031015]/70 p-4">
        <div className="h-3 w-20 rounded-full bg-accent-primary/50" />
        <div className="mt-4 grid grid-cols-[1fr_0.55fr] gap-3">
          <div className="space-y-2">
            <div className="h-3 rounded-full bg-white/30" />
            <div className="h-3 w-4/5 rounded-full bg-white/20" />
            <div className="h-3 w-3/5 rounded-full bg-white/15" />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10" />
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
        <div className="h-10 rounded-lg border border-white/10 bg-white/10" />
        <div className="h-10 rounded-lg border border-white/10 bg-white/10" />
        <div className="h-10 rounded-lg border border-white/10 bg-white/10" />
      </div>
    </div>
  );
}

Preview.propTypes = {
  tone: PropTypes.oneOf(["cyan", "teal", "amber"]).isRequired,
};

function Projects() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-primary">
            Portfolio
          </p>
          <h2 className="font-syne text-4xl font-bold tracking-[-0.025em] text-light-text-primary dark:text-dark-text-primary sm:text-5xl">
            Featured projects
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-light-text-secondary dark:text-dark-text-secondary">
          A focused selection of public projects showing responsive UX,
          API-driven interfaces, state management, and clean frontend delivery.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-[1.35rem] border border-dark-border bg-dark-card p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-accent-primary/45"
          >
            <Preview tone={project.tone} />
            <div className="flex flex-1 flex-col p-2 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-accent-secondary">
                {project.type}
              </p>
              <h3 className="mt-2 font-syne text-xl font-bold tracking-[-0.015em] text-dark-text-primary">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-dark-text-secondary">
                {project.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-dark-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-accent-primary px-4 text-sm font-semibold text-[#021014] transition hover:bg-accent-secondary"
                >
                  Live site
                  <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/aliabdelfatah3"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub profile`}
                  className="inline-flex min-h-10 w-11 items-center justify-center rounded-xl border border-white/10 text-dark-text-primary transition hover:border-accent-primary/50 hover:text-accent-primary"
                >
                  <FaGithub aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
