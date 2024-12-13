import Logo from '../../assets/logo.jpg';
import './Navbar.css';
import data from './data';
import { IoIosColorPalette } from "react-icons/io";
import {useModalContext} from '../../context/modal-context';
function Navbar() {
  const {showModalHandler} = useModalContext();
  return (
  <nav>
    <div className="container nav__container">
    <a href="index.html" className='nav__logo'> 
      <img src={Logo} alt="Logo" />
    </a>
    <ul className='nav__menu'>
      {
        data.map((item) => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
      }
    </ul>
    <button id='theme_icon' onClick={showModalHandler}><IoIosColorPalette /></button>
    </div>
  </nav>
  )
}

export default Navbar
