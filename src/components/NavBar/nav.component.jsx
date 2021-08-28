import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./nav.component.css";
import { menuLists } from "./MenuLists";
import Logo from "./logo/main-logo.component";

function Nav({ history }) {
  const [hamClicked, setHamClicked] = useState(false);

  const clickHandler = () => setHamClicked(!hamClicked);
  useEffect(() => {
    history.listen(() => {
      return setHamClicked(!hamClicked);
    });
  });
  const MenuLists = menuLists.map((list, index) => {
    return (
      <li key={index} className="nav-list--item">
        <NavLink
          to={list.url}
          activeClassName="nav-list--active"
          className="nav-list"
        >
          <span className="active">{`</`}</span> {list.title}
          <span className="active">{` >`}</span>
        </NavLink>
      </li>
    );
  });
  return (
    <>
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
          <div
            className={hamClicked ? "line line-1 clicked" : "line line-1"}
          ></div>
          <div
            className={hamClicked ? "line line-2 clicked" : "line line-2"}
          ></div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Nav);
