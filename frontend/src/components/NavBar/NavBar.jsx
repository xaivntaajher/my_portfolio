import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>My Portfolio</b>
          </Link>
        </li>
      </ul>
      <h1>Projects</h1>
    </div>
  );
};

export default Navbar;
