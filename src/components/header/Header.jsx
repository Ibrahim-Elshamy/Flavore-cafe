import React, { useState } from "react";
import { BsCupHot } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const navItems = [
  { to: "heroSection", label: "Hero Section" },
  { to: "choosing", label: "Why Choose Us" },
  { to: "about", label: "About" },
  { to: "menu", label: "Menu" },
  { to: "booking", label: "Booking" },
];

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header fixed-top py-3">
      <Container className="d-flex justify-content-between align-items-center">
        {/* logo */}
        <div className="logo">
          <h1 className="d-flex align-items-center gap-2 fs-2">
            Flavore <BsCupHot className="fs-3" />
          </h1>
          <h6 className="slogan">Wake up to something special</h6>
        </div>

        <div className="menu_icon d-lg-none" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>

        {/* Navigation */}
        {/* <nav className="nav_links d-flex gap-3 align-items-center"> */}
        <nav
          className={`nav_links d-flex gap-3 align-items-center ${
            menuOpen ? "active" : ""
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={50}
              offset={-window.innerHeight / 4.5}
              spy={true}
              activeClass="active"
              className="nav_link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
