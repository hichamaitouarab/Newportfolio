import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Appointment management",
      description:
        "A modern web platform for a car body repair and maintenance garage. It showcases the garage’s services, allows clients to create an account, book appointments online, and track their reservations through a personalized dashboard. Administrators can manage all bookings efficiently with validation and filtering tools. ",
      image: process.env.PUBLIC_URL + "/images/ecommerce.jpg",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveLink: "https://avantage-auto.vercel.app/",
      githubLink: "https://github.com/hichamaitouarab/gestion-rendez-vous",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A modern e-commerce Website built with React , featuring shopping cart, and placing orders with WhatsApp and Instagram.",
      image: process.env.PUBLIC_URL + "/images/ecommerce.jpg",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveLink: "#",
      githubLink: "https://github.com/hichamaitouarab/JewleryStore",
    },
    {
      id: 3,
      title: "Web Store",
      description:
        "A simple web store application that allows users to browse products, add them to a cart, and view their total price, with stripe payment integration.",
      image: process.env.PUBLIC_URL + "/images/webstore.jpg",
      technologies: ["Python", "HTML5", "Netlify", "Stripe"],
      liveLink: "https://herestore.netlify.app/",
      githubLink: "https://github.com/hichamaitouarab/WebStore",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A simple Web portfolio template with a clean and modern design.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["HTML5", "CSS3", "Netlify"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Film Management WebApp",
      description: "A film management web application with real-time updates.",
      image: process.env.PUBLIC_URL + "/images/film.jpg",
      technologies: ["JavaScript", "CSS", "HTML", "Netlify"],
      liveLink: "https://gestionfilms.netlify.app/",
      githubLink: "https://github.com/hichamaitouarab/gestion-films",
    },
    {
      id: 6,
      title: "Contact Management System",
      description:
        "A comprehensive contact management system that allows users to add, edit, and delete contacts with a user-friendly interface.",
      image: process.env.PUBLIC_URL + "/images/contact.png",
      technologies: ["Vue", "JavaScript", "HTML", "Netlify"],
      liveLink: "https://contactsgest.netlify.app/",
      githubLink: "https://github.com/hichamaitouarab/gestionnaire-contacts",
    },
    {
      id: 7,
      title: "Calculator App",
      description:
        "A simple calculator app built with HTML,CSSand JavaScript, featuring basic arithmetic operations and a clean UI.",
      image: process.env.PUBLIC_URL + "/images/calculator.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      liveLink: "https://hichamcalculator.netlify.app/",
      githubLink: "https://github.com/hichamaitouarab/calculator",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            Here are some of my projects that showcase some of my skills and
            creativity
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${
                hoveredProject === project.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      className="project-link live-link"
                    >
                      <span>🔗</span> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="project-link github-link"
                    >
                      <span>📱</span> GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
