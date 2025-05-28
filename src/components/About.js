import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              Hello! I'm a passionate full-stack developer with a love for
              creating beautiful and functional web applications. I enjoy
              turning complex problems into simple, beautiful and intuitive
              designs.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying up-to-date with the latest industry trends.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>1</h3>
                <p>Year Experience</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img
                src="/images/profile1.jpg"
                alt="Hicham AIT-OUARAB - Profile"
                className="profile-image"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="image-placeholder" style={{ display: "none" }}>
                <div className="profile-icon">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
