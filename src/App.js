import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "./styles/global.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="tech-stack" data-aos="fade-up">
          <TechStack />
        </section>

        <section id="projects" data-aos="fade-up">
          <Projects />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
