import { CgArrowLongRight } from "react-icons/cg";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import CTA from "../../components/CTA/CTA.jsx";

const Home = () => {
  return (
    <section id="home">
      <div className="fog-container">
        <div className="fog-img fog-img-1"></div>
        <div className="fog-img fog-img-2"></div>
      </div>

      <div className="home-top">
        <a href="#">Abhay.dev</a>
        <div>
          <p>
            <span>Frontend Developer</span>
            <span>ReactJs Developer</span>
            <span>MERN Stack Developer</span>
            <span>Responsive Web Design</span>
            <span>Frontend Developer</span>
            <span>ReactJs Developer</span>
          </p>
        </div>
      </div>

      <Title />
      <div className="cta">
        <CTA />
      </div>

      <p className="scroll-down">
        <span>Scroll</span> <CgArrowLongRight />
      </p>
    </section>
  );
};

export default Home;

const Title = () => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const heading1 = "FULLSTACK";
  const heading2 = "DEVELOPER";

  const [titleOne, setTitleOne] = useState(heading1);
  const [titleTwo, setTitleTwo] = useState(heading2);
  const countRefOne = useRef(0);
  const intervalOne = useRef(null);
  const countRefTwo = useRef(0);
  const intervalTwo = useRef(null);

  const randomize = (title, setTitle, heading, countRef, interval) => {
    countRef.current = 0;
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      const newTitle = title
        .split("")
        .map((letter, index) => {
          if (index < countRef.current) {
            return heading[index];
          }

          return alphabets[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (countRef.current >= heading.length) {
        clearInterval(interval.current);
      }

      countRef.current += 1 / 4;
      setTitle(newTitle);
    }, 40);
  };

  useEffect(() => {
    randomize(titleOne, setTitleOne, heading1, countRefOne, intervalOne);
    setTimeout(() => {
      randomize(titleTwo, setTitleTwo, heading2, countRefTwo, intervalTwo);
    }, 810);
  }, []);

  return (
    <div className="home-title">
      <p>I'm Abhay</p>
      <h1
        onMouseOver={() =>
          randomize(titleOne, setTitleOne, heading1, countRefOne, intervalOne)
        }
      >
        {titleOne.split("").map((char, index) => {
          if (char == heading1[index])
            return (
              <span key={index} style={{ color: "var(--color-primary)" }}>
                {char}
              </span>
            );
          return <span key={index}>{char}</span>;
        })}
      </h1>
      <h1
        onMouseOver={() =>
          randomize(titleTwo, setTitleTwo, heading2, countRefTwo, intervalTwo)
        }
      >
        {titleTwo.split("").map((char, index) => {
          if (char == heading2[index])
            return (
              <span key={index} style={{ color: "var(--color-primary)" }}>
                {char}
              </span>
            );
          return <span key={index}>{char}</span>;
        })}
      </h1>
    </div>
  );
};
