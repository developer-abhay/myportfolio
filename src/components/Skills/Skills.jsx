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
  const skillsList = [
    [
      { title: "HTML", Icon: <FaHtml5 />, color: "#E44D26" },
      { title: "CSS", Icon: <FaCss3Alt />, color: "#2D53E5" },
      {
        title: "Material UI",
        Icon: <img src={MaterialUiIcon} />,
        color: "",
      },
      {
        title: "JS",
        Icon: <IoLogoJavascript />,
        color: "#F7E025",
      },
      {
        title: "Bootstrap",
        Icon: <FaBootstrap />,
        color: "#7F18F9",
      },
    ],
    [
      { title: "React", Icon: <FaReact />, color: "#66DBFB" },
      {
        title: "Express",
        Icon: <SiExpress />,
        color: "",
      },
      { title: "Node.js", Icon: <FaNode />, color: "#7AB861" },
      {
        title: "MongoDB",
        Icon: <SiMongodb />,
        color: "#39A747",
      },
      {
        title: "PostgreSQL",
        Icon: <BiLogoPostgresql />,
        color: "#386B93",
      },
    ],
    [
      {
        title: "Next.js",
        Icon: <SiNextdotjs />,
        color: "",
      },
      { title: "tRPC", Icon: <SiTrpc />, color: "#3F90CD" },
      {
        title: "Tailwind",
        Icon: <RiTailwindCssFill />,
        color: "#3EBFF8",
      },
      {
        title: "Typescript",
        Icon: <SiTypescript />,
        color: "#377CC8",
      },
    ],
    [
      {
        title: "Firebase",
        Icon: <IoLogoFirebase />,
        color: "#FFCD34",
      },
      {
        title: "Netlify",
        Icon: <SiNetlify />,
        color: "#40B0BE",
      },
      {
        title: "Vercel",
        Icon: <IoLogoVercel />,
        color: "#",
      },
    ],
    [
      {
        title: "Prisma",
        Icon: <SiPrisma />,
        color: "#",
      },
      {
        title: "Socket.io",
        Icon: <TbBrandSocketIo />,
        color: "#fff",
      },
    ],
    [{ title: "More", Icon: <FaCode />, color: "#E44D26" }],
  ];

  return (
    <div id="skills">
      <div className="horizontal-bar">My Technical Domain</div>
      <div className="skills-container">
        {skillsList.map((row, rowIndex) => (
          <div key={rowIndex} className={`skill-row skill-row-${rowIndex + 1}`}>
            {row.map(({ title, Icon, color }, itemIndex) => (
              <div key={itemIndex} className="skill-item">
                <div className="icon" style={{ color }}>
                  {Icon}
                </div>
                <p>{title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="heading">
        <SkillText classname="left-to-right" />
        <SkillText classname="right-to-left" />
        {/* <SkillText classname="left-to-right" /> */}
      </div>
    </div>
  );
};

export default Skills;

const SkillText = ({ classname }) => {
  return (
    <div className={classname}>
      <h1>Skills</h1>
      <h1>
        <span>Skills</span>
      </h1>
      <h1>Skills</h1>
      <h1>
        <span>Skills</span>
      </h1>
      <h1>Skills</h1>
      <h1>
        <span>Skills</span>
      </h1>
    </div>
  );
};
