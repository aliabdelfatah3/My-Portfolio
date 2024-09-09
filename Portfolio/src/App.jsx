import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contacts";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/Context/ThemeProvider";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);
  const [count, setCount] = useState(0);

  return (
    <div className="bg-Bej dark:bg-darklight">
      <ThemeProvider>
        <Router>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
