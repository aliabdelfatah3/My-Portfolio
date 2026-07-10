import { useState, useEffect } from "react";
import { FaArrowRight, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";
import Home_Pic from "./HomePic/Home_Pic.png";

const ROLES = [
  "Front-End Developer",
  "React Developer",
  "Angular Developer",
  "UI-Focused Engineer",
];

const proofPoints = [
  { value: "1+", label: "Years of experience" },
  { value: "5+", label: "Projects completed" },
  { value: "15+", label: "Technologies" },
];

function useTypewriter(
  words,
  typingSpeed = 76,
  deletingSpeed = 42,
  pauseMs = 1500,
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

    if (isPausing) {
      const t = setTimeout(() => {
        setState((s) => ({ ...s, isDeleting: true, isPausing: false }));
      }, pauseMs);
      return () => clearTimeout(t);
    }

    if (!isDeleting) {
      const next = current.slice(0, displayed.length + 1);
      const t = setTimeout(() => {
        setState((s) => ({
          ...s,
          displayed: next,
          isPausing: next === current,
        }));
      }, typingSpeed);
      return () => clearTimeout(t);
    }

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
  }, [state, words, typingSpeed, deletingSpeed, pauseMs]);

  return state.displayed;
}

function Home() {
  const typedText = useTypewriter(ROLES);

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden px-5 pb-20 pt-16 sm:px-8 lg:px-12">
      <div className="absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-primary/10 blur-[110px]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.88fr]">
        <div className="max-w-3xl pt-10 text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent-primary">
            <span className="h-2 w-2 rounded-full bg-accent-secondary shadow-[0_0_18px_rgba(39,213,196,0.75)]" />
            Available for frontend roles and projects
          </div>

          <h1 className="text-balance font-syne text-5xl font-bold leading-[0.98] tracking-[-0.03em] text-light-text-primary dark:text-dark-text-primary sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-accent-primary">Ali Abdelfattah</span>
          </h1>

          <h2 className="mt-5 flex min-h-10 items-center justify-center gap-1 font-inter text-2xl font-semibold tracking-[-0.01em] text-light-text-secondary dark:text-dark-text-secondary sm:text-3xl lg:justify-start">
            <span>I&apos;m a {typedText}</span>
            <span className="inline-block h-8 w-[2px] bg-accent-primary animate-[blink_0.75s_step-end_infinite]" />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-light-text-secondary dark:text-dark-text-secondary sm:text-lg lg:mx-0">
            I turn product ideas into responsive, accessible, and maintainable
            web interfaces using React, Angular, TypeScript, and modern UI
            tooling.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold tracking-[0.02em] text-[#021014] shadow-[0_18px_45px_rgba(25,184,242,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              View my work
              <FaArrowRight aria-hidden="true" />
            </a>
            <a
              href="#contact-me"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-dark-border bg-dark-card/70 px-6 py-3 text-sm font-semibold tracking-[0.02em] text-dark-text-primary transition duration-300 hover:-translate-y-0.5 hover:border-accent-primary/60 hover:text-accent-primary"
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-dark-border bg-dark-card/70 px-5 py-4 text-left shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="font-syne text-2xl font-bold tracking-[-0.02em] text-accent-primary">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-dark-text-secondary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem] lg:mr-0">
          <div className="absolute -inset-6 rounded-[2rem] bg-accent-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-accent-primary/20 bg-[#06161D] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.38)]">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.09em] text-dark-text-secondary">
                  Current focus
                </p>
                <p className="mt-1 font-syne text-lg font-semibold text-dark-text-primary">
                  Production-ready UI
                </p>
              </div>
              <div className="flex -space-x-2 text-accent-primary">
                <FaReact className="h-7 w-7 rounded-full border border-white/10 bg-dark-card p-1.5" />
                <SiTypescript className="h-7 w-7 rounded-full border border-white/10 bg-dark-card p-1.5" />
                <SiVite className="h-7 w-7 rounded-full border border-white/10 bg-dark-card p-1.5" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-b from-accent-primary/18 to-transparent">
              <img
                className="relative z-10 mx-auto h-[25rem] w-full object-contain object-bottom"
                src={Home_Pic}
                alt="Frontend engineer portrait"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-white/10 bg-[#071820]/90 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent-secondary">
                  Specialty
                </p>
                <p className="mt-1 text-sm font-semibold text-dark-text-primary">
                  React, Angular, Tailwind CSS, API integration, and clean component architecture
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="https://github.com/aliabdelfatah3"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-dark-text-primary transition hover:border-accent-primary/50 hover:text-accent-primary"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ali-abdelfattah-866b91198/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-dark-text-primary transition hover:border-accent-primary/50 hover:text-accent-primary"
              >
                <FaLinkedinIn aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
