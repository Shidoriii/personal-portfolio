// File Name: About.js
// Name: Rumsha Ahmed | Student ID: 301477527 | Due Date: May 23rd, 2025

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home" >
        <h1>Welcome to My Portfolio!</h1>
        <p>I'm a developer passionate about building great experiences.</p>
        <p>Mission: To deliver clean, effective, and user-friendly web solutions.</p>
        <Link to="/about">
            <button>Learn More About Me</button>
        </Link>
    </div>
  );
}

export default Home;