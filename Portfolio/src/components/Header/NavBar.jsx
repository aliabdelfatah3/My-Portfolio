import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../Themes/ThemeProvider";
import logo_transparent from "../../LogoPic/logo_transparent.png";
import NightMode from "./Img/NightMode.png";
import LightMode from "./Img/LightMode.png";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile menu toggle

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`relative flex bg-Bej w-full justify-around items-center font-bold pt-5 pb-5  top-0 z-50 transition-transform duration-300 ${
        isSticky ? "-translate-y-full" : "translate-y-0"
      } dark:bg-slate-950`}
    >
      <NavLink to="/">
        <img className="mr-3 lg:h-12 h-10" src={logo_transparent} alt="Logo" />
      </NavLink>
      {/* Desktop Menu */}
      <ul className="hidden lg:flex font-semibold font-Inter flex-row lg:gap-12">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 dark:text-sky-200 dark:border-sky-200"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 dark:text-sky-200 dark:border-sky-200"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/about"}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 dark:text-sky-200 dark:border-sky-200"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/contact-me"}
          >
            Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 dark:text-sky-200 dark:border-sky-200"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/projects"}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 dark:text-sky-200 dark:border-sky-200"
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/skills"}
          >
            Skills
          </NavLink>
        </li>
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
      <div className="lg:hidden flex items-center" onClick={toggleMenu}>
        {isMobileMenuOpen ? (
          <FaTimes className="text-3xl text-black dark:text-white" />
        ) : (
          <FaBars className="text-3xl text-black dark:text-white" />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden flex flex-col absolute top-full left-0 bg-opacity-95 dark:bg-opacity-90 bg-[#FFFFE4] dark:bg-[#201B4B] text-white`}
      >
        <div className="flex flex-col text-center w-[200px] text-md ">
          <div className="flex ">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#5E3395] dark:text-[#5179E7]  bg-sky-100 dark:bg-[#211B5B] "
                    : "text-[#0E3395]"
                } w-full py-2`
              }
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#5E3395] dark:text-[#5179E7] bg-sky-100 dark:bg-[#211B5B] "
                    : "text-[#0E3395]"
                } w-full py-2`
              }
              to="/about"
            >
              About Me
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#5E3395] dark:text-[#5179E7] bg-sky-100 dark:bg-[#211B5B] "
                    : "text-[#0E3395] "
                } w-full py-2`
              }
              to="/contact-me"
            >
              Contact Me
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#5E3395] dark:text-[#5179E7] bg-sky-100 dark:bg-[#211B5B] "
                    : "text-[#0E3395]"
                } w-full py-2`
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#5E3395] dark:text-[#5179E7] bg-sky-100 dark:bg-[#211B5B] "
                    : "text-[#0E3395]"
                } w-full py-2`
              }
              to="/skills"
            >
              Skills
            </NavLink>
          </div>
        </div>

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
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
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
