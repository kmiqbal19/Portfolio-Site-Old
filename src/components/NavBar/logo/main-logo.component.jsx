import React from "react";
import logo from "../../../assets/main-logo.svg";
import "./main-logo.component.css";
import { NavLink } from "react-router-dom";
function Logo() {
  return (
    <NavLink to="/" className="main-logo">
      <img src={logo} alt="Main Logo" />
    </NavLink>
  );
}

export default Logo;
