import { useEffect } from "react";
import "./Footer.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    const clickMe = document.getElementById("click-me");

    // clickMe.style.transform = "rotate(360deg)";

    // clickMe.addEventListener("mouseover", () => {
    //   clickMe.style.transform = "rotate(0deg)";
    // });
  }, []);
  return (
    <section id="footer">
      <h1>
        Let'
        <span>
          build <br />
          something
        </span>{" "}
        cool <br />
        together!
      </h1>
      <div>
        <FaLongArrowAltRight className="arrow-icon" />
        <a
          id="click-me"
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abhaysharma.developer@gmail.com"
        >
          Click Me
        </a>
      </div>
      <p>
        @{new Date().getFullYear()} Created by Abhay <br />
        All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
