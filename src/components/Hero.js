import React from "react";
import "../styles/Hero.css";

function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">
            AIT-OUARAB <span className="accent">Hicham</span>
          </h1>
          <p className="hero-subtitle">Full stack Developer</p>
          <div className="hero-buttons">
          <a
            href="#projects"
            className="hero-button"
            onClick={scrollToProjects}
          >
            See My Work
          </a>
          <a href="/CV-Hicham AIT OUARAB.pdf" className="hero-button resume-button" download>
            Download Resume
          </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-glow">
            {/* You can replace this with your own headshot */}
            <img src="/images/profile5.jpg" alt="Hicham" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
