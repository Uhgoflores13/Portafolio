import "./About.css";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { IoMdDownload } from "react-icons/io";
import data from "./data";
import Card from "../../components/Card.jsx";

function About() {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img  src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {
              data.map((item) => {
                return (
                  <Card key={item.id} className="about__card">
                    <span className="about__card-icon">{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                );
              })
            }
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, hic
            ipsam. Suscipit vel tempora enim dignissimos eligendi, deleniti
            alias beatae aliquam porro aspernatur facilis officiis eius sit
            accusamus pariatur recusandae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            expedita tempore numquam sint unde omnis soluta neque,
            reprehenderit, aut esse deleniti, asperiores est tenetur
            perspiciatis repellat? Tenetur laborum accusamus nobis!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <IoMdDownload />{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
