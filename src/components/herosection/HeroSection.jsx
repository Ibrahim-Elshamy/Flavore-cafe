import React from "react";
import "./heroSection.css";
import heroImg from "../../img/hero2.jpeg";
import { Container } from "react-bootstrap";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { RiCake3Line } from "react-icons/ri";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <section className="heroSection">
      <Container className="d-flex justify-content-around align-items-center">
        <div className="content">
          <h2>Flavore's coffee</h2>
          <h2 className="mb-5">The Perfect Start to Your Day</h2>
          <Link
            to="menu"
            smooth={true}
            duration={50}
            offset={-window.innerHeight / 4.5}
            spy={true}
            activeClass="active"
            className="viewMenuBtn"
          >
            View Menu
          </Link>
          <ul>
            <li>
              <GiCoffeeCup />
            </li>
            <li>
              <RiCake3Line />
            </li>
            <li>
              <SiBuymeacoffee />
            </li>
            <li>
              <GiCoffeeBeans />
            </li>
          </ul>
        </div>
        <div className="heroImg">
          <img src={heroImg} alt="hero" />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
