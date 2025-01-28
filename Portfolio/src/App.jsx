import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/Themes/ThemeProvider";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  return (
    <div className="bg-orange-100 dark:bg-darklight h-screen">
      <ThemeProvider>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
