import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a href="#" className="btn" style={{ borderRadius: "100%" }}>
          H
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ justifyContent: "flex-end" }}
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav mb-2">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
