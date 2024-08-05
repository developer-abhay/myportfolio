import { useEffect, useRef, useState } from "react";
import Home from "./sections/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";

function App() {
  const windowWidthRef = useRef(window.innerWidth);

  const animateMouseTrailer = (e, mouseTrailer) => {
    let x = e.clientX - mouseTrailer?.offsetWidth / 2;
    let y = e.clientY - mouseTrailer?.offsetHeight / 2;
    mouseTrailer.style.opacity = 1;
    const keyframes = {
      transform: `translate(${x}px,${y}px)`,
    };
    mouseTrailer.animate(keyframes, {
      duration: 100,
      fill: "forwards",
    });
  };

  function transform(section) {
    const scrollSection = section.querySelector("#scroll-body");
    let percentage = (window.scrollY / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 620 ? 620 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw,0,0)`;
  }

  function scrollHorizontal() {
    if (windowWidthRef.current > 700) {
      const stickySection = document.getElementById("sticky");
      transform(stickySection);
    }
  }

  function handleResize() {
    windowWidthRef.current = window.innerWidth;

    const mainSection = document.getElementById("app-container");
    const scrollBody = document.getElementById("scroll-body");
    const homeSection = document.getElementById("home");
    const projectSection = document.getElementById("projects");
    const skillSection = document.getElementById("skills");
    const footerSection = document.getElementById("footer");

    // Setting Height dynamically
    if (windowWidthRef.current > 700) {
      homeSection.style.width = `${windowWidthRef.current * 1 - 70}px`;
      projectSection.style.width =
        window.getComputedStyle(projectSection).width;
      skillSection.style.width = window.getComputedStyle(skillSection).width;
      footerSection.style.width = window.getComputedStyle(footerSection).width;

      const totalWidth =
        (70 +
          Number(homeSection.style.width.split("p")[0]) +
          Number(projectSection.style.width.split("p")[0]) +
          Number(skillSection.style.width.split("p")[0]) +
          Number(footerSection.style.width.split("p")[0])) /
        windowWidthRef.current;

      mainSection.style.height = `${totalWidth * 100}vh`;
      scrollBody.style.width = `${totalWidth * 100}vw`;
    }

    if (windowWidthRef.current <= 700) {
      document.body.style.overflow = "visible";
      mainSection.style.height = `fit-content`;
      scrollBody.style.width = `100vw`;
    }
  }

  useEffect(() => {
    const mouseTrailer = document.getElementById("trailer");

    // Set initial screen size
    handleResize();

    // Set Screen Size on resize
    window.onresize = handleResize;

    // Show mouse Trailer
    window.onmousemove = (e) => {
      animateMouseTrailer(e, mouseTrailer);
    };

    // Hide mouse trailer
    window.onmouseout = () => {
      mouseTrailer.style.opacity = 0;
    };

    // Horizontal Scroll on Window Scroll
    window.onscroll = scrollHorizontal;

    // Clean up on unmount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main id="app-container">
      <div id="trailer"></div>
      <Navbar />
      <div id="about-normal-view">
        <About />
      </div>
      <div id="sticky">
        <div id="scroll-body">
          <Home />
          <div id="about-mobile-view">
            <About />
          </div>
          <Projects />
          <Skills />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
