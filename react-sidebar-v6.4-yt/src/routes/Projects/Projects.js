import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <ul>
        <li>
          <Link to="projectdetail1">Project 1</Link>
        </li>
        <li>
          <Link to="projectdetail2">Project 2</Link>
        </li>
        {/* Add more project links as needed */}
      </ul>
    </div>
  );
}

export default Projects;
