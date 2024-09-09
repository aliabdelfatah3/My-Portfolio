import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Theme Provider component to wrap around the app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, set the initial theme based on system preferences or previously saved theme
  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (darkModePreference) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme); // Persist theme preference in local storage
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the ThemeContext in components
export const useTheme = () => {
  return useContext(ThemeContext);
};

