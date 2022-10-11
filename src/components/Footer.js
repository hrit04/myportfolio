import React from "react";

const Footer = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ flexDirection: "column", textAlign: "center", padding: "30px" }}
      id="contact"
    >
      <div className="col-sm-12 col-md-6 col-lg-4">
        <h4 style={{ margin: "2rem auto", color: "#fff", fontSize: "1.6rem" }}>
          Eat  Code  Sleep  Repeat.
        </h4>
      </div>
      <div className="social-media-btn" style={{ marginBottom: "2rem" }}>
        <a
          href="https://www.linkedin.com/in/hritam-chowdhury-175209193/"
          className="social-btn btn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="mailto:hritam.c04@gmail.com" className="social-btn btn">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/hrit04" className="social-btn btn">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p style={{ color: "#fff" }}>Created by me &copy; Hritam Chowdhury</p>
    </div>
  );
};

export default Footer;
