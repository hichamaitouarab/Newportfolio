import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const sections = ["home", "about", "tech-stack", "projects", "contact"];
      let currentSection = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (window.scrollY >= elementTop - 120) {
            currentSection = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      const navbarHeight = 70;
      const additionalOffset = 20;
      const offsetTop = target.offsetTop - navbarHeight - additionalOffset;
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Tech Stack", href: "tech-stack" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-content">
          {/* LOGO */}
          <div className="nav-logo">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              <img
                src={process.env.PUBLIC_URL + "/images/logo2.png"}
                alt="Hicham Logo"
                className="logo-image"
              />
            </a>
          </div>

          {/* MENU LINKS */}
          <div className={`nav-menu ${isOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                className={`nav-link ${
                  activeSection === item.href ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* HAMBURGER TOGGLE */}
          <div
            className={`nav-toggle ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
