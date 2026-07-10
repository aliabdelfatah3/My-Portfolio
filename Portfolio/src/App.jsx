import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import NavBar from "./components/Header/NavBar";
import { ThemeProvider } from "./components/Themes/ThemeProvider";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import FullPageParticles from "./components/ParticlesBackground/FullPageParticles";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    document.title = "Ali Abdelfattah - Portfolio";

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="bg-light-bg dark:bg-dark-bg text-light-text-primary dark:text-dark-text-primary min-h-screen w-full overflow-x-hidden transition-colors duration-500 relative"
      style={{
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      }}
    >
      <ThemeProvider>
        <FullPageParticles />
        <CustomCursor mousePos={mousePos} />
        <BackToTop />

        {/* Global Mouse Spotlight */}
        <div
          className="pointer-events-none fixed inset-0 z-10 hidden md:block"
          style={{
            background: `radial-gradient(560px circle at ${mousePos.x}px ${mousePos.y}px, rgba(25, 184, 242, 0.08), transparent 42%)`,
          }}
        />

        <NavBar />

        <main className="flex flex-col pb-24 pt-20">
          <section id="home" data-od-id="section-home">
            <Home />
          </section>
          <section id="about" data-od-id="section-about">
            <AboutMe />
          </section>
          <section id="skills" data-od-id="section-skills">
            <Skills />
          </section>
          <section id="experience" data-od-id="section-experience">
            <Experience />
          </section>
          <section id="education" data-od-id="section-education">
            <Education />
          </section>
          <section id="projects" data-od-id="section-projects">
            <Projects />
          </section>
          <section id="contact-me" data-od-id="section-contact">
            <ContactMe />
          </section>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
