import React from "react";
import "./nav.component.css";
import Logo from "./logo/main-logo.component";
import NavHamburger from "./NavHamburger/hamburger.component";
import NavLists from "./Lists/nav-list.component";
function Nav() {
  return (
    <nav id="main-nav">
      <Logo />
      <NavLists className="nav-lists" />
      <NavHamburger />
    </nav>
  );
}

export default Nav;
