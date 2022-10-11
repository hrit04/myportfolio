import React from "react";
import proj3 from "../assests/Screenshot 2022-10-11 at 4.29.33 PM.png";
import proj1 from "../assests/Screenshot 2022-10-08 at 4.41.35 PM.png";
import proj6 from "../assests/Screenshot 2022-10-08 at 4.36.28 PM.png";
import proj4 from "../assests/Screenshot 2022-10-08 at 4.44.48 PM.png";
import proj2 from "../assests/Screenshot 2022-10-08 at 4.48.34 PM.png";
import proj5 from "../assests/Screenshot 2022-10-11 at 2.37.07 PM.png";
import { useInView } from "react-intersection-observer";

const Project = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0,
  // });
  return (
    <section className="container" id="project">
      <>
        <h1 data-aos="move-in-right" data-aos-delay="300">
          Projects
        </h1>
        <div
          className="underline"
          data-aos="move-in-right"
          data-aos-delay="300"
          style={{ marginBottom: "30px" }}
        ></div>
        <p className="mb-3" data-aos="move-in-right" data-aos-delay="500">
          Here are some of my projects I've worked on. Want to see more?{" "}
          <a href="https://github.com/hrit04">View my github account</a>.
        </p>
        <div className="projects-display">
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="100"
            >
              <figure>
                <img src={proj1} alt="shopZee" />
                <figcaption>
                  <h4>Jira-lit, an application for task management</h4>
                  <a href="https://jiralitefrontend.herokuapp.com/">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              <figure>
                <img src={proj2} alt="shopZee" />
                <figcaption>
                  <h4>Album-app, where you can store your memories</h4>
                  <a href="https://mern-album.herokuapp.com/">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="300"
            >
              <figure>
                <img src={proj3} alt="shopZee" />
                <figcaption>
                  <h4>Attendance app based on face recognision</h4>
                  <a href="https://github.com/hrit04/Attendance-Automation">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="400"
            >
              <figure>
                <img src={proj4} alt="shopZee" />
                <figcaption>
                  <h4>Card game</h4>
                  <a href="https://kiddo-play-card.herokuapp.com/">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="500"
            >
              <figure>
                <img src={proj5} alt="shopZee" />
                <figcaption>
                  <h4>A Frontend of a BookStore</h4>
                  <a href="https://booky-gate.herokuapp.com/">Visit website</a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="600"
            >
              <figure>
                <img src={proj6} alt="shopZee" />
                <figcaption>
                  <h4>Portfolio with more features</h4>
                  <a href="">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
          </div>
        </div>
        <a href="https://github.com/hrit04" className="btn mt-3">
          See more on github
        </a>
      </>
    </section>
  );
};

export default Project;
