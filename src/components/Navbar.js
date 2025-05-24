// File Name: Navbar.js
// Name: Rumsha Ahmed | Student ID: 301477527 | Due Date: May 23rd, 2025

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar">
    <img src={logo} alt="Logo" className="logo" />
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;