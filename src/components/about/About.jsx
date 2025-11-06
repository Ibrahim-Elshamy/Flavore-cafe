import React from 'react'
import "./about.css"
import photo9 from "../../img/photo (9).png";
import photo3 from "../../img/photo (3).png";
import { Link } from "react-scroll";
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    <section className="about">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4} className="img d-flex flex-column mb-4 mb-md-0">
            <img src={photo9} alt="Coffee man" className="coffee_man mb-3" />
            <img src={photo3} alt="Smiling face" className="smile_face" />
          </Col>

          <Col md={6} className="content">
            <h1>Visit Us Today</h1>
            <h5>
              We believe in crafting moments of joy with every cup we serve —
              made with passion, care, and the best ingredients.
            </h5>
            <p>Now you can book a table or drink before coming</p>
            <Link
              to="booking"
              smooth={true}
              duration={50}
              offset={-window.innerHeight / 4.5}
              spy={true}
              activeClass="active"
              className="aboutBtn"
            >
              Booking
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About
