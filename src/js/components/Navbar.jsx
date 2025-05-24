import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <h1 className="navbar-logo" href="#">My Landing Page</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Home")}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "About" ? "active" : ""}`}
                  onClick={() => handleLinkClick("About")}
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "Service" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Service")}
                  href="#"
                >
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "Contact" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Contact")}
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;