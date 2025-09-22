import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Digitrix.agency</div>
      <ul className="nav-links">
        <li>Demos</li>
        <li>Pages</li>
        <li>Support</li>
        <li>Contact</li>
      </ul>
      <button className="quote-btn">Get A Free Quote</button>
    </nav>
  );
};

export default Navbar;
