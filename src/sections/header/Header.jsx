import "./Header.css";
import data from "./data";
import HeaderImage from "../../assets/header.jpg";
function Header() {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portit" />
        </div>
        <h3>Hugo Flores</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          rerum possimus illo delectus consequuntur aspernatur repellendus
          repudiandae necessitatibus, optio provident molestias reprehenderit
          consequatur alias aperiam. Illo at id reprehenderit veritatis.
        </p>

        <div className="header__cta">
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
