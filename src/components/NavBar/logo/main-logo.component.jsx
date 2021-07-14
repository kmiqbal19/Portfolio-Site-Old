import React from "react";
import logo from "../../../assets/main-logo.svg";
import "./main-logo.component.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/" className="main-logo">
      <img src={logo} alt="Main Logo" />
    </Link>
  );
}

export default Logo;
