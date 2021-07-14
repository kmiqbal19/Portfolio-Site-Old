import React from "react";
import { Link } from "react-router-dom";
import "./nav-list.component.css";
function NavLists() {
  return (
    <ul className="nav-list__container">
      <li>
        <Link to="/projects" className="nav-list--items">
          Projects
        </Link>
      </li>
      <li>
        <Link className="nav-list--items" to="/skills">
          Skills
        </Link>
      </li>
      <li>
        <Link className="nav-list--items" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-list--items" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavLists;
