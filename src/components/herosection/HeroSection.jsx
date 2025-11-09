import React from "react";
import "./heroSection.css";
import heroImg from "../../img/hero2.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { RiCake3Line } from "react-icons/ri";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <section className="heroSection">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            xs={10}
            md={6}
            
          >
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
          </Col>
          <Col
            md={6}
          >
            <div className="heroImg d-none d-md-block">
              <img src={heroImg} alt="hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
