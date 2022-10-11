import React from "react";
import { useInView } from "react-intersection-observer";

const SelfIntro = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      ref={ref}
      style={{ flexDirection: "column", padding: 0 }}
    >
      {inView && (
        <div className="selfInfo">
          <h4 style={{ color: "#f47c7c" }}>Hey Folks,I'm Hritam Chowdhury,</h4>
          <h1
            className="mt-2 mb-3 typewrite-text"
            style={{ fontWeight: "700" }}
          >
            A FullStack SDE.
          </h1>
          <div className="d-flex gap-4 align-items-center">
            <a href="#contact" className="btn">
              Contact us
            </a>
            <a href="#project" style={{ color: "#f47c7c" }}>
              See Projects <i className="fa-solid fa-chevron-down"></i>
            </a>
          </div>
        </div>
      )}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default SelfIntro;
