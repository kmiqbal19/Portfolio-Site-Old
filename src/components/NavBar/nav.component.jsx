import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.component.css";
import { menuLists } from "./MenuLists";
import Logo from "./logo/main-logo.component";

function Nav() {
  const [hamClicked, setHamClicked] = useState(false);

  const clickHandler = () => setHamClicked(!hamClicked);

  const MenuLists = menuLists.map((list, index) => {
    return (
      <li key={index}>
        <NavLink
          to={list.url}
          activeClassName="active"
          className="nav-list--items"
        >
          {list.title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav id="main-nav">
      <Logo />
      <ul
        className={
          hamClicked ? "nav-list__container mobile" : "nav-list__container"
        }
      >
        {MenuLists}
      </ul>
      <div className="hamburger" onClick={() => clickHandler()}>
        <i className={hamClicked ? "fas fa-times" : "fas fa-hamburger"}></i>
      </div>
    </nav>
  );
}

export default Nav;
