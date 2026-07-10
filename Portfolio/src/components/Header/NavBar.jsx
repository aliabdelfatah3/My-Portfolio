import { useEffect, useState } from "react";
import { useTheme } from "../Themes/ThemeProvider";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const links = [
  { path: "#about", label: "About" },
  { path: "#skills", label: "Skills" },
  { path: "#projects", label: "Projects" },
  { path: "#experience", label: "Experience" },
  { path: "#education", label: "Education" },
  { path: "#contact-me", label: "Contact" },
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "projects", "contact-me"];
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (isActive) =>
    `relative rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-accent-primary/10 text-accent-primary"
        : "text-dark-text-secondary hover:text-dark-text-primary"
    }`;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030B0E]/82 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Ali Abdelfattah home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent-primary/25 bg-accent-primary/10 font-syne text-sm font-bold text-accent-primary">
            AA
          </span>
          <span className="hidden sm:block">
            <span className="block font-syne text-sm font-bold leading-none tracking-[-0.01em] text-dark-text-primary">
              Ali Abdelfattah
            </span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-dark-text-secondary">
              Frontend Engineer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const key = link.path.replace("#", "");
            const isActive = activeSection === key;
            return (
              <li key={link.path}>
                <a className={linkClass(isActive)} href={link.path}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-dark-card text-dark-text-secondary transition hover:border-accent-primary/50 hover:text-accent-primary"
          >
            {isDarkMode ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>
          <a
            href="#contact-me"
            className="inline-flex min-h-10 items-center rounded-full bg-accent-primary px-5 text-sm font-bold text-[#021014] transition hover:bg-accent-secondary"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-dark-card text-dark-text-primary lg:hidden"
        >
          {isMobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`fixed right-4 top-16 z-40 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-dark-border bg-dark-card p-4 shadow-2xl transition duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="grid gap-2">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-dark-text-secondary transition hover:bg-white/[0.04] hover:text-dark-text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="mt-2 flex items-center justify-between rounded-xl border border-dark-border px-4 py-3 text-sm font-semibold text-dark-text-primary"
          >
            Theme
            {isDarkMode ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
