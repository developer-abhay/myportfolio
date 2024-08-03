import React, { useEffect, useState } from "react";
import "./About.css";
import myImage from "../../assets/myLogo.jpg";

const About = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const box = document.querySelector(".profile-image-container");
    const boxContents = document.querySelector(".profile-image");
    const gridSize = 5;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const hoverPoint = document.createElement("div");
        hoverPoint.classList.add("hover-point");
        hoverPoint.style.top = `${(100 / gridSize) * row}%`;
        hoverPoint.style.left = `${(100 / gridSize) * col}%`;
        hoverPoint.addEventListener("mouseenter", () =>
          applyTiltEffect(row, col)
        );
        hoverPoint.addEventListener("mouseleave", () => {
          boxContents.style.transform = "";
        });
        box.appendChild(hoverPoint);
      }
    }

    function applyTiltEffect(row, col) {
      const tiltX = ((row - gridSize / 2) / gridSize) * 20;
      const tiltY = ((col - gridSize / 2) / gridSize) * 20;

      boxContents.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }
  }, []);
  return (
    <section id="about" className="noise">
      <h1>
        Currently based in <span>New Delhi</span>
      </h1>
      <div className="about-details">
        <div className="profile-image-container">
          <img src={myImage} alt="" className="profile-image" />
        </div>
        <div className="about-text">
          <div>
            <div>Status: Offline</div>
            <span>{time}</span>
          </div>
          <p>
            Hey! I'm Abhay, your friendly neighborhood{" "}
            <span> web developer </span>. I'm just another <span>22 year</span>{" "}
            old geek who likes to build cool stuff on the internet by turning
            coffee into code, and making pixels and words dance together.
          </p>

          <p>
            Currently, I'm a <span>freelance</span> ninja, slicing through
            projects with precision and style. Whether you're looking for a
            long-term partner or just a quick fling with some code, I'm your
            guy. By the way do you know that spiders are the only web developers
            that are happy to find bugs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
