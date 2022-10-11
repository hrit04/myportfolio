import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SelfIntro from "./components/SelfIntro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      debounceDelay: 10,
      throttleDelay: 10,
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SelfIntro />
        <About />
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
