import React from "react";
import "../styles/Footer.css";

// Import social media icons
import {
  FaGithub,
  FaLinkedin,
  // FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hichamaitouarab",
      icon: <FaGithub />,
      color: "#333",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hicham-aitouarab/",
      icon: <FaLinkedin />,
      color: "#0077B5",
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/yourusername",
    //   icon: <FaTwitter />,
    //   color: "#1DA1F2",
    // },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hicham_ouarab/",
      icon: <FaInstagram />,
      color: "#E4405F",
    },
    {
      name: "Email",
      url: "mailto:hichamaitouarab23@gmail.com",
      icon: <FaEnvelope />,
      color: "#D44638",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">Hicham AIT-OUARAB</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating amazing web
              experiences.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.name}
                  style={{ "--hover-color": link.color }}
                >
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#tech-stack">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="#services">Web Development</a>
                  </li>
                  <li>
                    <a href="#services">Frontend Design</a>
                  </li>
                  <li>
                    <a href="#services">.</a>
                  </li>
                  <li>
                    <a href="#services">Full Stack Solutions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Hicham AIT-OUARAB. All rights reserved.
            </p>
            <p className="made-with">Made with ❤️ using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
