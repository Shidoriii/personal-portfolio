// File Name: Projects.js
// Name: Rumsha Ahmed | Student ID: 301477527 | Due Date: May 23rd, 2025

import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  return (
    <div className="page projects">
      <h1>My Projects</h1>
      <div className="project-card">
            <img src={project1} alt="Project 1" />
            <h3>Portfolio Website</h3>
            <p>Final Assignment for Web Interface Design class - Meet the remastered (DEMO) website for the cafe, Toe Beans Cat Cafe</p>
      </div>
      <div className="project-card">
            <img src={project2} alt="Project 2" />
            <h3>E-commerce Database</h3>
            <p>A fully responsive web music player using vanilla JavaScript, Responsive for all devices, build using HTML, CSS, and JavaScript.</p>
      </div>
      <div className="project-card">
            <img src={project3} alt="Project 3" />
            <h3>Multi-Animator Project</h3>
            <p>Assignment 4 for Web Interface Design Class - Survey</p>
        </div>
    </div>
  );
}

export default Projects;