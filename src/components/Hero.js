import React from "react";
import '../styles/Hero.css';

function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Hicham 👋</h1>
        <p>I build modern web sites .</p>
        <a 
          href="#projects" 
          className="hero-button"
          onClick={scrollToProjects}
        >
          See My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;