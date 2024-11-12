import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";
export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });
  }, []);
  const [mobileView, setMobileView] = useState(false);
  const toggleMenu = () => {
    mobileView ? setMobileView(false) : setMobileView(true);
  };
  return (
    <>
      <nav className={`nav-container ${scroll ? "dark-nav" : ""}`}>
        <img src={logo} alt="logo png" className="logo" />
        <ul className={`${mobileView ? "" : "hide-mobile-menu"}`}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-150} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              <button className="contact-btn">Contact us</button>
            </Link>
          </li>
        </ul>
        <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
}
