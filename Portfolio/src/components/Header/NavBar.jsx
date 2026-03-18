import { useEffect, useState } from "react";
import { useTheme } from "../Themes/ThemeProvider";
import logo_transparent from "../../LogoPic/logo_transparent.png";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const sections = ["home", "about", "skills", "experience", "education", "projects", "contact-me"];
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isDarkMode, toggleTheme } = useTheme();

  const DesktopLinkClasses = (isActive) =>
    `relative text-base tracking-wide transition-all duration-300 pb-1 ${
      isActive
        ? "text-accent-primary dark:text-accent-secondary font-semibold drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        : "text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary font-medium"
    }
    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5
    after:bg-gradient-to-r after:from-accent-primary after:to-accent-secondary
    after:transform after:origin-left after:transition-transform after:duration-300
    ${isActive ? "after:scale-x-100" : "after:scale-x-0"} hover:after:scale-x-100
    before:content-[''] before:absolute before:-top-2.5 before:left-1/2 before:-translate-x-1/2
    before:w-1 before:h-1 before:rounded-full before:transition-all before:duration-300
    ${isActive ? "before:bg-accent-primary dark:before:bg-accent-secondary before:opacity-100 before:scale-100" : "before:opacity-0 before:scale-0"}
    `;

  const MobileLinkClasses = (isActive) =>
    `${
      isActive
        ? "text-accent-primary dark:text-accent-secondary bg-blue-50/50 dark:bg-blue-900/20 font-semibold"
        : "text-light-text-secondary dark:text-dark-text-secondary font-medium"
    } w-[150px] rounded-lg py-3 px-4 inline-block transition-colors duration-300`;

  const links = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About Me" },
    { path: "#skills", label: "Skills" },
    { path: "#experience", label: "Experience" },
    { path: "#projects", label: "Projects" },
    { path: "#contact-me", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass flex justify-between lg:justify-around items-center py-4 px-6 transition-all duration-300`}
    >
      <div className="flex items-center">
        <a href="#home">
          <img className="h-10 lg:h-12 hover:scale-105 transition-transform duration-300 drop-shadow-sm" src={logo_transparent} alt="Logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row gap-8 xl:gap-12">
        {links.map((link) => {
          const isActive = activeSection === link.path.replace("#", "");
          return (
            <li key={link.path}>
              <a className={DesktopLinkClasses(isActive)} href={link.path}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Theme Switcher for Large Screens */}
      <div className="hidden lg:flex items-center gap-3">
        <FaSun className={`text-xl transition-colors duration-300 ${!isDarkMode ? "text-yellow-500" : "text-gray-400"}`} />
        <label className="flex cursor-pointer relative">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only"
          />
          <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center shadow-inner transition-colors duration-300 border border-gray-300 dark:border-gray-600">
            <div
              className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? "translate-x-6 bg-accent-secondary" : "translate-x-0 bg-accent-primary"
              }`}
            ></div>
          </div>
        </label>
        <FaMoon className={`text-xl transition-colors duration-300 ${isDarkMode ? "text-blue-400" : "text-gray-400"}`} />
      </div>

      <button
        onClick={toggleMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        className="relative z-50 lg:hidden flex items-center"
      >
        {isMobileMenuOpen ? (
          <FaTimes className="text-2xl text-light-text-primary dark:text-dark-text-primary transition-colors" />
        ) : (
          <FaBars className="text-2xl text-light-text-primary dark:text-dark-text-primary transition-colors" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 glass pt-20 h-screen w-2/3 max-w-sm z-40 top-0 right-0 left-auto
            flex flex-col items-center transition-transform duration-500 ease-in-out border-l border-white/20 dark:border-white/10 shadow-2xl ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden `}
      >
        <ul className="flex flex-col text-center gap-4 w-full px-6">
          {links.map((link) => {
            const isActive = activeSection === link.path.replace("#", "");
            return (
              <li className="flex justify-center" key={link.path}>
                <a
                  onClick={toggleMenu}
                  className={MobileLinkClasses(isActive)}
                  href={link.path}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Theme Switcher inside the mobile menu */}
        <div className="flex justify-center items-center gap-4 px-5 py-8 mt-auto mb-10 border-t border-gray-200 dark:border-gray-700 w-full">
          <FaSun className={`text-xl transition-colors duration-300 ${!isDarkMode ? "text-yellow-500" : "text-gray-400"}`} />
          <label className="flex cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center shadow-inner border border-gray-300 dark:border-gray-600">
              <div
                className={`w-4 h-4 rounded-full shadow-md transition-transform duration-300 ${
                  isDarkMode ? "translate-x-6 bg-accent-secondary" : "translate-x-0 bg-accent-primary"
                }`}
              ></div>
            </div>
          </label>
          <FaMoon className={`text-xl transition-colors duration-300 ${isDarkMode ? "text-blue-400" : "text-gray-400"}`} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
