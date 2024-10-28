import "./About.css";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { IoMdDownload } from "react-icons/io";

function About() {
  return (
    <section id="about">
     <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt="About Image" />
        </div>
      </div>
      <div className="about__right">
        <h2>About me</h2>
        <div className="about__cards">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, hic ipsam. Suscipit vel tempora enim dignissimos eligendi, deleniti alias beatae aliquam porro aspernatur facilis officiis eius sit accusamus pariatur recusandae?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro expedita tempore numquam sint unde omnis soluta neque, reprehenderit, aut esse deleniti, asperiores est tenetur perspiciatis repellat? Tenetur laborum accusamus nobis!</p>
          <a href={CV} download className="btn primary">Download CV <IoMdDownload/> </a>
        </div>
      </div>
     </div>
    </section>
  );
}

export default About;
