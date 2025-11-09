
import React from "react";
import { Container } from "react-bootstrap";
import { BsCupHot } from "react-icons/bs";
import photo5 from "../../img/photo (5).png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footerContent">
        <img src={photo5} alt="footer" className="footerImg" />
        <div className="footerOverlay">
          <p className="footerText">
            © 2025 Flavore <BsCupHot className="cupIcon" /> Café — Created with
            love
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
