// File Name: About.js
// Name: Rumsha Ahmed | Student ID: 301477527 | Due Date: May 23rd, 2025

import React from "react";
import profile from "../assets/me.png";
import resumePDF from "../assets/resume.pdf";

function About() {
  return (
    <div className="page about">
        <h1>About Me</h1>
        <img src={profile} alt="Rumsha Ahmed" className="profile-img" />
        <p>My name is Rumsha Ahmed. I'm a Web Developer and Software Engineering student with a passion for clean and interactive UI/UX design.</p>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <button>View My Resume (PDF)</button>
        </a>
    </div>
  );
}

export default About;