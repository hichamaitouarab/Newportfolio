import React from "react";
import "../styles/TechStack.css";

// Import icons from react-icons
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaBootstrap,
  FaGithub,
  FaFigma,
  FaVuejs,
  // FaWordpress,
} from "react-icons/fa";

import {
  // SiMongodb,
  // SiExpress,
  // SiNextdotjs,
  SiTailwindcss,
  // SiTypescript,
  SiFirebase,
  // SiMysql,
  // SiPostgresql,
  SiFlutter,
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "Vue.js",
      icon: <FaVuejs />,
      color: "#42b883",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#FFCA28",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#339933",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "#3776AB",
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F05032",
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "#181717",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "#7952B3",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      color: "#F24E1E",
    },
    {
      name: "database",
      icon: <FaDatabase />,
      color: "#4F5D95",
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      color: "#02569B",
    },
    
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="container">
        <h2 className="tech-stack-title">My Tech Stack</h2>
        <p className="tech-stack-subtitle">Technologies I work with</p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
