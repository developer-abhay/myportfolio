import React, { useEffect } from "react";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import { MdInsertLink } from "react-icons/md";
import "./Projects.css";

function Projects() {
  useEffect(() => {
    const roundText = document.querySelector(".round-text");

    const roundString = roundText.innerText
      .split("")
      .map((char, index) => {
        return `<span key="${index}" style="transform:rotate(${
          index * 7.4
        }deg)">${char}</span>`;
      })
      .join("");

    roundText.innerHTML = roundString;
  }, []);

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Gadgify - Ecommerce Store",
      github: "https://github.com/developer-abhay/EcommerceApp",
      demo: "https://thegadgify.netlify.app",
    },
    {
      id: 2,
      image: IMG2,
      title: "Youtube Clone",
      github: "https://github.com/developer-abhay/YoutubeCloneApp",
      demo: "https://youtubecloneapp123.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "LinkedIn Clone",
      github: "https://github.com/developer-abhay/LinkedIn-v2",
      demo: "https://linkedin-clone-486a0.web.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Textin - Live Chat App",
      github: "https://github.com/developer-abhay/chat-app",
      demo: "https://textin.vercel.app",
    },
  ];

  return (
    <section id="projects">
      <div className="heading">
        <div>
          <h1>Projects</h1>
          <h1>Projects</h1>
          <h1>Projects</h1>
          <h1>Projects</h1>
        </div>
      </div>

      <div className="projects-container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="projects-item" key={id}>
            <a
              className="projects-item-image"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt="project 1" />
            </a>
            <div>
              <h3>{title}</h3>
              <a href={github} target="_blank" rel="noreferrer">
                Source Code - Github Repo <MdInsertLink className="icon" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <a
        className="circle"
        href="https://github.com/developer-abhay"
        target="_blank"
        rel="noreferrer"
      >
        <p>More</p>
        <div className="round-text">See More - See More - See More - </div>
        <div className="layer"></div>
      </a>
    </section>
  );
}

export default Projects;
