import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      {/* Background Overlay */}
      <div className="about-overlay"></div>

      <div className="about-container">
        {/* RIGHT IMAGE */}
        <div className="about-image fade-in-right">
          <div className="image-wrapper">
            <img
              src="/images/profile6.jpg"
              alt="Hicham AIT-OUARAB - Profile"
              className="profile-image"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="image-placeholder" style={{ display: "none" }}>
              <div className="profile-icon">👨‍💻</div>
            </div>
          </div>
        </div>
        {/* LEFT TEXT */}
        <div className="about-text fade-in-left">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hello! I’m a passionate{" "}
            <span className="accent">Full-Stack Developer</span> with a love for
            creating beautiful and functional web applications. I enjoy turning
            complex problems into{" "}
            <span className="accent">simple, intuitive designs</span>.
          </p>
          <p className="about-description">
            When I’m not coding, you can find me exploring{" "}
            <span className="accent">new technologies</span>, contributing to{" "}
            <span className="accent">open-source projects</span>, or sharing
            knowledge with the developer community. I believe in{" "}
            <span className="accent">continuous learning</span> and staying
            up-to-date with the latest industry trends.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-card glow-card">
              <h3>1</h3>
              <p>Year Experience</p>
            </div>
            <div className="stat-card glow-card">
              <h3>7+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card glow-card">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
