import { useEffect } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";

function App() {
  useEffect(() => {
    // Mouse Trailer
    const mouseTrailer = document.getElementById("trailer");

    const animateMouseTrailer = (e) => {
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

    window.onmousemove = (e) => {
      animateMouseTrailer(e);
    };

    window.addEventListener("mouseout", () => {
      mouseTrailer.style.opacity = 0;
    });

    // Horizontal Scroll
    window.addEventListener("scroll", () => {
      const stickySection = document.getElementById("sticky");

      transform(stickySection);
    });

    function transform(section) {
      const offSetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector("#scroll-body");
      let percentage =
        ((window.scrollY - offSetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
      scrollSection.style.transform = `translate3d(${-percentage}vw,0,0)`;
    }
  }, []);

  return (
    <main>
      <div id="trailer"></div>
      <Navbar />
      <div id="sticky">
        <div id="scroll-body">
          <Home />
          <Projects />
          <About />
          {/* <Skills /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
