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

const App = () => {
  return (
    <main>
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
      <FloatingNav />
    </main>
  );
};

export default App;
