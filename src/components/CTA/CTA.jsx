import MyResume from "../../assets/Resume_Abhay.pdf";

const CTA = () => {
  return (
    <a href={MyResume} download className="btn">
      Download CV
    </a>
  );
};

export default CTA;
