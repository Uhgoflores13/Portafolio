
import { useEffect } from "react";
import "./Header.css";
import data from "./data";
import HeaderImage from "../../assets/header.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portit" />
        </div>
        <h3 data-aos="fade-up">Hugo Flores</h3>
        <p data-aos="fade-up">
          You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p>

        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Let's talk</a>
          <a href="#portfolio" className="btn light">My work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noreferrer noopener">{item.icon}</a>)
          }
        </div>
      </div>
    </section>
  );
}

export default Header;
