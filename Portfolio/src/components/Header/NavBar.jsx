import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Themes/ThemeProvider";
import logo_transparent from "../../LogoPic/logo_transparent.png";
import NightMode from "./Img/NightMode.png";
import LightMode from "./Img/LightMode.png";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile menu toggle

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isDarkMode, toggleTheme } = useTheme();

  const DesktopLinkClasses = ({ isActive }) =>
    isActive
      ? "text-sky-950 py-1 border-b-2 border-sky-950 dark:text-sky-200 dark:border-sky-200"
      : "text-sky-500 hover:text-sky-600";

  const MobileLinkClasses = ({ isActive }) =>
    `${
      isActive
        ? "text-[#5E3395] dark:text-[#5179E7]  bg-sky-100 dark:bg-[#211B5B] "
        : "text-[#0E3395]"
    } w-fit rounded-md py-2 px-4 `;

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/contact-me", label: "Contact Me" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
  ];

  return (
    <nav
      className={`relative bg-Bej flex lg:justify-around lg:gap-0 gap-20 justify-around items-center font-bold py-5 top-0 z-50 transition-transform duration-300 ${
        isSticky ? "-translate-y-full" : "translate-y-0"
      } dark:bg-slate-950`}
    >
      <button
        onClick={toggleMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden flex items-center"
      >
        {isMobileMenuOpen ? (
          <FaTimes className="text-3xl text-black dark:text-white" />
        ) : (
          <FaBars className="text-3xl text-black dark:text-white" />
        )}
      </button>
      <NavLink to="/">
        <img className="mr-3 lg:h-12 h-10" src={logo_transparent} alt="Logo" />
      </NavLink>
      {/* Desktop Menu */}
      <ul className="hidden lg:flex font-semibold font-Inter flex-row lg:gap-12">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink className={DesktopLinkClasses} to={link.path}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Theme Switcher for Large Screens */}
      <div className="hidden lg:flex items-center">
        <img src={LightMode} alt="Light Mode" className="h-6 w-6" />
        <label className="flex cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only"
          />
          <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center">
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                isDarkMode ? "translate-x-4" : ""
              }`}
            ></div>
          </div>
        </label>
        <img src={NightMode} alt="Night Mode" className="h-6 w-6" />
      </div>

      {/* Mobile Menu Icon */}

      {/* Mobile Dropdown Menu */}

      <div
        // onClick={(e) => e.stopPropagation()}
        className={`fixed inset-0 bg-opacity-95 dark:bg-opacity-90 pt-2 h-fit w-40 z-50 bg-[#FFFFE4] dark:bg-[#201B4B] top-full 
            flex items-center flex-col transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden `}
        //
      >
        <ul className="flex flex-col text-center w-fit text-md ">
          {links.map((link) => (
            <li className="flex justify-center" key={link.path}>
              <NavLink
                onClick={toggleMenu}
                className={MobileLinkClasses}
                to={link.path}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Switcher inside the mobile menu */}
        <div className="flex  justify-center px-5 py-2">
          <img src={LightMode} alt="Light Mode" className="h-6 w-6" />
          <label className="flex cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center">
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md  transition-transform ${
                  isDarkMode ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </label>
          <img src={NightMode} alt="Night Mode" className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
