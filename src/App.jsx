import { Element } from "react-scroll";
import Header from "./components/header/Header";
import HeroSection from "./components/herosection/HeroSection";
import Features from "./components/features/Features";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Bookig from "./components/booking/Bookig";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Element name="heroSection">
        <HeroSection />
      </Element>

      <Element name="choosing">
        <Features />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="menu">
        <Menu />
      </Element>
      
      <Element name="booking">
        <Bookig />
      </Element>

      <Footer />
    </>
  );
}

export default App;
