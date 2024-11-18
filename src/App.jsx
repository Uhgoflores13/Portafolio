import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Navbar from "./sections/navbar/Navbar";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import About from "./sections/about/About";
import Header from "./sections/header/Header";
import Portfolio from "./sections/portfolio/Portfolio";
import FAQs from "./sections/faqs/FAQs";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Theme from './theme/Theme';
import {useThemeContext} from './context/theme-context';
import {useRef, useEffect, useState} from 'react';

const App = () => {

  const {themeState} = useThemeContext();
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () =>{
    setShowFloatingNav(true)
  }

  const hideFloatingNavHandler = () =>{
    setShowFloatingNav(false)
  }

  const floatingNavToggleHandler = () =>{
    if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 5) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 5)) {
      showFloatingNavHandler();
    }else{
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y)
  }

  useEffect(() => {
  const checkYPosition =  setInterval(floatingNavToggleHandler, 2000)

  return () => clearInterval(checkYPosition)
  }, [siteYPosition])


  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}> 
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
     {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
