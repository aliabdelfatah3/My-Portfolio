import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../Themes/ThemeProvider";
import logo_transparent from "../../LogoPic/logo_transparent.png";
import NightMode from "./Img/NightMode.png";
import LightMode from "./Img/LightMode.png";

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
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

  return (
    <nav
      className={`flex bg-Bej w-full  justify-around items-center font-bold pt-3 pb-5 pl-10 sticky top-0 z-50 transition-transform duration-300 ${
        isSticky ? "-translate-y-full " : "translate-y-0 "
      }dark:bg-slate-950`}
    >
      <img className="mr-3 h-12" src={logo_transparent} alt="Logo" />

      <ul className="flex font-semibold font-Inter flex-row gap-12">
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
            to={"/contact-us"}
          >
            Contact Us
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
      <div className="flex">
        <img src={LightMode} alt="Light Mode" className="size-6" />
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
        <img src={NightMode} alt="Night Mode" className="size-6" />
      </div>
    </nav>
  );
}

export default NavBar;
