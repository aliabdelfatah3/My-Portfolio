import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import About_Pic from "./Pic/About_Pic.png";

const contactTiles = [
  {
    label: "Location",
    value: "Egypt",
    icon: FaMapMarkerAlt,
  },
  {
    label: "GitHub",
    value: "aliabdelfatah3",
    href: "https://github.com/aliabdelfatah3",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Ali Abdelfattah",
    href: "https://www.linkedin.com/in/ali-abdelfattah-866b91198/",
    icon: FaLinkedinIn,
  },
];

const capabilities = [
  "Responsive HTML, CSS, and JavaScript interfaces",
  "React.js with Zustand, Redux, and API integration",
  "Angular development with RxJS fundamentals",
  "Tailwind CSS, Git workflows, and reusable components",
];

function AboutMe() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-12">
      <div className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-accent-primary/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-[1.5rem] border border-dark-border bg-dark-card p-3 shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
          <img
            className="h-[29rem] w-full rounded-[1.1rem] object-cover object-top"
            src={About_Pic}
            alt="Frontend engineer profile"
          />
          <div className="absolute bottom-6 right-6 rounded-2xl border border-accent-primary/25 bg-accent-primary px-5 py-4 text-[#021014] shadow-[0_20px_45px_rgba(25,184,242,0.25)]">
            <p className="font-syne text-3xl font-bold leading-none">1+</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em]">
              year experience
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-primary">
          About me
        </p>
        <h2 className="font-syne text-4xl font-bold leading-tight tracking-[-0.025em] text-light-text-primary dark:text-dark-text-primary sm:text-5xl">
          I build responsive interfaces that are clear, fast, and easy to maintain.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-light-text-secondary dark:text-dark-text-secondary sm:text-lg">
          I am a Front-End Developer focused on turning designs and product
          requirements into polished web experiences. My work combines HTML,
          CSS, JavaScript, TypeScript, React.js, Angular, Tailwind CSS, API
          integration, and Git-based workflows, with attention to performance,
          usability, and reusable code.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="flex items-center gap-3 rounded-2xl border border-dark-border bg-dark-card/75 px-4 py-3 text-sm font-semibold text-dark-text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-accent-secondary shadow-[0_0_16px_rgba(39,213,196,0.6)]" />
              {capability}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {contactTiles.map(({ label, value, href, icon: Icon }) => {
            const inner = (
              <>
                <Icon className="text-accent-primary" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-dark-text-secondary">
                    {label}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-dark-text-primary">
                    {value}
                    {href && <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                  </p>
                </div>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark-border bg-dark-card px-4 transition hover:-translate-y-0.5 hover:border-accent-primary/55"
              >
                {inner}
              </a>
            ) : (
              <div
                key={label}
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark-border bg-dark-card px-4"
              >
                {inner}
              </div>
            );
          })}
        </div>

        <a
          href="https://drive.google.com/file/d/1Q_jxi9DdfEGVa5khvBb6ZNVBHzxHohao/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-accent-primary px-6 text-sm font-bold text-[#021014] transition hover:-translate-y-0.5 hover:bg-accent-secondary"
        >
          Download resume
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
