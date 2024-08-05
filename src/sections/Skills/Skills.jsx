import "./Skills.css";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import MaterialUiIcon from "../../assets/material-ui-icon.svg";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTrpc } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  // const skillsList = [
  //   [
  //     {
  //       title: "HTML",
  //       Icon: <FaHtml5 />,
  //       color: "#E44D26",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  //     },
  //     {
  //       title: "CSS",
  //       Icon: <FaCss3Alt />,
  //       color: "#2D53E5",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  //     },
  //     {
  //       title: "Material UI",
  //       Icon: <img src={MaterialUiIcon} />,
  //       color: "",
  //       link: "https://mui.com/",
  //     },
  //     {
  //       title: "JS",
  //       Icon: <IoLogoJavascript />,
  //       color: "#F7E025",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //     },
  //     {
  //       title: "Bootstrap",
  //       Icon: <FaBootstrap />,
  //       color: "#7F18F9",
  //       link: "https://getbootstrap.com/",
  //     },
  //   ],
  //   [
  //     {
  //       title: "React",
  //       Icon: <FaReact />,
  //       color: "#66DBFB",
  //       link: "https://react.dev/",
  //     },
  //     {
  //       title: "Express",
  //       Icon: <SiExpress />,
  //       color: "",
  //       link: "https://expressjs.com/",
  //     },
  //     {
  //       title: "Node.js",
  //       Icon: <FaNode />,
  //       color: "#7AB861",
  //       link: "https://nodejs.org/en",
  //     },
  //     {
  //       title: "MongoDB",
  //       Icon: <SiMongodb />,
  //       color: "#39A747",
  //       link: "https://www.mongodb.com/",
  //     },
  //     {
  //       title: "PostgreSQL",
  //       Icon: <BiLogoPostgresql />,
  //       color: "#386B93",
  //       link: "https://www.postgresql.org/",
  //     },
  //   ],
  //   [
  //     {
  //       title: "Next.js",
  //       Icon: <SiNextdotjs />,
  //       color: "#fff",
  //       link: "https://nextjs.org/",
  //     },
  //     {
  //       title: "tRPC",
  //       Icon: <SiTrpc />,
  //       color: "#3F90CD",
  //       link: "https://trpc.io/",
  //     },
  //     {
  //       title: "Tailwind",
  //       Icon: <RiTailwindCssFill />,
  //       color: "#3EBFF8",
  //       link: "https://tailwindcss.com/",
  //     },
  //     {
  //       title: "Typescript",
  //       Icon: <SiTypescript />,
  //       color: "#377CC8",
  //       link: "https://www.typescriptlang.org/",
  //     },
  //   ],
  //   [
  //     {
  //       title: "Firebase",
  //       Icon: <IoLogoFirebase />,
  //       color: "#FFCD34",
  //       link: "https://firebase.google.com/",
  //     },
  //     {
  //       title: "Netlify",
  //       Icon: <SiNetlify />,
  //       color: "#40B0BE",
  //       link: "https://www.netlify.com/",
  //     },
  //     {
  //       title: "Vercel",
  //       Icon: <IoLogoVercel />,
  //       color: "#fff",
  //       link: "https://vercel.com/",
  //     },
  //   ],
  //   [
  //     {
  //       title: "Prisma",
  //       Icon: <SiPrisma />,
  //       color: "#fff",
  //       link: "https://www.prisma.io/",
  //     },
  //     {
  //       title: "Socket.io",
  //       Icon: <TbBrandSocketIo />,
  //       color: "#fff",
  //       link: "https://socket.io/",
  //     },
  //   ],
  //   [
  //     {
  //       title: "More",
  //       Icon: <FaCode />,
  //       color: "#E44D26",
  //       link: "https://github.com/developer-abhay",
  //     },
  //   ],
  // ];

  const skillsList = [
    {
      title: "HTML",
      Icon: <FaHtml5 />,
      color: "#E44D26",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "CSS",
      Icon: <FaCss3Alt />,
      color: "#2D53E5",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "Material UI",
      Icon: <img src={MaterialUiIcon} />,
      color: "",
      link: "https://mui.com/",
    },
    {
      title: "JS",
      Icon: <IoLogoJavascript />,
      color: "#F7E025",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "Bootstrap",
      Icon: <FaBootstrap />,
      color: "#7F18F9",
      link: "https://getbootstrap.com/",
    },
    {
      title: "React",
      Icon: <FaReact />,
      color: "#66DBFB",
      link: "https://react.dev/",
    },
    {
      title: "Express",
      Icon: <SiExpress />,
      color: "",
      link: "https://expressjs.com/",
    },
    {
      title: "Node.js",
      Icon: <FaNode />,
      color: "#7AB861",
      link: "https://nodejs.org/en",
    },
    {
      title: "MongoDB",
      Icon: <SiMongodb />,
      color: "#39A747",
      link: "https://www.mongodb.com/",
    },
    {
      title: "PostgreSQL",
      Icon: <BiLogoPostgresql />,
      color: "#386B93",
      link: "https://www.postgresql.org/",
    },
    {
      title: "Next.js",
      Icon: <SiNextdotjs />,
      color: "#fff",
      link: "https://nextjs.org/",
    },
    {
      title: "tRPC",
      Icon: <SiTrpc />,
      color: "#3F90CD",
      link: "https://trpc.io/",
    },
    {
      title: "Tailwind",
      Icon: <RiTailwindCssFill />,
      color: "#3EBFF8",
      link: "https://tailwindcss.com/",
    },
    {
      title: "Typescript",
      Icon: <SiTypescript />,
      color: "#377CC8",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "Firebase",
      Icon: <IoLogoFirebase />,
      color: "#FFCD34",
      link: "https://firebase.google.com/",
    },
    {
      title: "Netlify",
      Icon: <SiNetlify />,
      color: "#40B0BE",
      link: "https://www.netlify.com/",
    },
    {
      title: "Vercel",
      Icon: <IoLogoVercel />,
      color: "#fff",
      link: "https://vercel.com/",
    },
    {
      title: "Prisma",
      Icon: <SiPrisma />,
      color: "#fff",
      link: "https://www.prisma.io/",
    },
    {
      title: "Socket.io",
      Icon: <TbBrandSocketIo />,
      color: "#fff",
      link: "https://socket.io/",
    },
    {
      title: "More",
      Icon: <FaCode />,
      color: "#E44D26",
      link: "https://github.com/developer-abhay",
    },
  ];

  return (
    <section id="skills">
      <div className="heading heading-top">
        <SkillText classname="right-to-left" />
      </div>
      <div className="skills-container">
        <div>
          {skillsList.map(({ title, Icon, color, link }, index) => (
            <a href={link} target="_blank" key={index} className="skill-item">
              <div className="icon" style={{ color }}>
                {Icon}
              </div>
              <p>{title}</p>
            </a>
          ))}
        </div>
      </div>
      {/* <div className="skills-container">
        {skillsList.map((row, rowIndex) => (
          <div key={rowIndex} className={`skill-row skill-row-${rowIndex + 1}`}>
            {row.map(({ title, Icon, color, link }, itemIndex) => (
              <a
                href={link}
                target="_blank"
                key={itemIndex}
                className="skill-item"
              >
                <div className="icon" style={{ color }}>
                  {Icon}
                </div>
                <p>{title}</p>
              </a>
            ))}
          </div>
        ))}
      </div> */}
      <div className="heading heading-bottom">
        <SkillText classname="left-to-right" />
      </div>
    </section>
  );
};

export default Skills;

const SkillText = ({ classname }) => {
  return (
    <div className={classname}>
      <div>
        <h1>Skills</h1>
        <h1>
          <span>Skills</span>
        </h1>
        <h1>Skills</h1>
      </div>

      <div>
        <h1>
          <span>Skills</span>
        </h1>
        <h1>Skills</h1>
        <h1>
          <span>Skills</span>
        </h1>
      </div>
    </div>
  );
};
