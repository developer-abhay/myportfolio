import { CgArrowLongRight } from "react-icons/cg";
import "./Home.css";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  return (
    <section className="home">
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
        <a href="" download className="btn">
          Download CV
        </a>
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
  const countRef = useRef(0);

  //   useEffect(() => {
  //     let interval = null;

  //     const currentCount = countRef.current;

  //     clearInterval(interval);

  //     interval = setInterval(() => {
  //       setTitleOne(
  //         titleOne
  //           .split("")
  //           .map((letter, index) => {
  //             if (index < currentCount) {
  //               return heading1[index];
  //             }
  //             return alphabets[Math.floor(Math.random() * 26)];
  //           })
  //           .join("")
  //       );

  //       if (currentCount >= heading1.length) {
  //         clearInterval(interval);
  //       }

  //       countRef.current += 1 / 3;
  //     }, 1000);

  //     // const updateTitle = () => {

  //     // interval = setInterval(() => {
  //     //   setTitleOne(
  //     //     titleOne
  //     //       .split("")
  //     //       .map((letter, index) => {
  //     //         if (index < currentCount) {
  //     //           return heading1[index];
  //     //         }
  //     //         return alphabets[Math.floor(Math.random() * 26)];
  //     //       })
  //     //       .join("")
  //     //   );

  //     //   if (currentCount >= heading1.length) {
  //     //     clearInterval(interval);
  //     //   }

  //     //   countRef.current += 1 / 3;
  //     // }, 30);

  //     //   if (currentCount % 4 == 0 && currentCount != 0) {
  //     //     setTitleOne((prevTitle) => {
  //     //       const newTitle = [...prevTitle];
  //     //       const indexToUpdate = Math.floor(currentCount / 4) % heading1.length;
  //     //       newTitle[indexToUpdate] = heading1[indexToUpdate];
  //     //       return newTitle;
  //     //     });
  //     //   } else {
  //     //     const newTitleOne = heading1
  //     //       .split("")
  //     //       .map(() => alphabets[Math.floor(Math.random() * alphabets.length)]);
  //     //     setTitleOne(newTitleOne);
  //     //   }
  //     // };

  //     // const intervalId = setInterval(updateTitle, 1000);

  //     // Cleanup interval on component unmount
  //     return () => clearInterval(interval);
  //   }, []);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    // document.querySelector(".headingOne").onmouseover = (event) => {
    setInterval(() => {
      clearInterval(interval);
      countRef.current = 0;

      interval = setInterval(() => {
        const newTitle = titleOne
          .split("")
          .map((letter, index) => {
            if (index < countRef.current) {
              return heading1[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (countRef.current >= heading1.length) {
          clearInterval(interval);
        }

        countRef.current += 1 / 3;
        setTitleOne(newTitle);
      }, 80);
      // };
    }, 2200);
  }, []);

  return (
    <div className="home-title">
      <p data-value="I'm Abhay Sharma">I'm Abhay Sharma </p>
      <h1 className="headingOne">{titleOne}</h1>
      <h1 data-value="Developer">Developer</h1>
    </div>
  );
};
