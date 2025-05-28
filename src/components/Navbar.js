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

      // Enhanced active section tracking with intersection observer-like logic
      const sections = ["home", "about", "tech-stack", "projects", "contact"];
      let currentSection = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          // Check if we've scrolled past this section's start point
          if (window.scrollY >= elementTop - 120) {
            currentSection = sections[i];
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
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
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    // Enhanced smooth scroll with better offset calculations
    const target = document.getElementById(targetId);
    if (target) {
      const navbarHeight = 70;
      const additionalOffset = 20; // Extra spacing for better visual separation
      const offsetTop = target.offsetTop - navbarHeight - additionalOffset;

      window.scrollTo({
        top: Math.max(0, offsetTop), // Prevent negative scroll
        behavior: "smooth",
      });

      // Update active section immediately for better UX
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
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              <span className="logo-text">HicHam</span>
              <span className="logo-dot"></span>
            </a>
          </div>

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
