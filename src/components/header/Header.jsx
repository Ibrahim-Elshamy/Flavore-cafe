import React, { useState } from "react";
import { BsCupHot } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./header.css";

const navItems = [
  { to: "heroSection", label: "Hero Section" },
  { to: "choosing", label: "Why Choose Us" },
  { to: "about", label: "About" },
  { to: "menu", label: "Menu" },
  { to: "booking", label: "Booking" },
];

function Header() {
  return (
    <header className="header fixed-top py-3">
      <Container className="d-flex justify-content-between align-items-center">
        {/* logo */}
        <div className="logo">
          <h1 className="d-flex align-items-center gap-3 fs-2">
            Flavore <BsCupHot className="fs-3" />
          </h1>
          <h6>Wake up to something special</h6>
        </div>

        {/* Navigation */}
        <div className="nav_links d-flex gap-3 align-items-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={50}
              offset={-window.innerHeight / 4.5 }
              spy={true}
              activeClass="active"
              className="nav_link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}

export default Header;
