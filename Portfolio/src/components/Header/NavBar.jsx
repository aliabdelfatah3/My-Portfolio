import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeProvider";

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
      className={`flex bg-Bej w-full gap-128 items-center font-bold pt-3 pb-5 pl-10  fixed top-0 z-50 transition-transform duration-300 ${
        isSticky ? "-translate-y-full " : "translate-y-0 "
      }dark:bg-darklight`}
    >
      <Link>
        <img className="mr-3 h-12" src="src\Pic\logo.png" alt="" />
      </Link>
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
      {/* <button onClick={toggleTheme}>Dark Mode</button> */}
      {/* <ul className="flex font-semibold font-Inter flex-row gap-12">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 "
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
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 "
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
                  ? "text-sky-950 py-1 border-b-2 border-sky-950 "
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/contact"}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-sky-50 py-1 border-b-2 border-sky-50 "
                  : "text-sky-500 hover:text-sky-600"
              }`
            }
            to={"/services"}
          >
            Services
          </NavLink>
        </li>
      </ul> */}
    </nav>
  );
}

export default NavBar;
