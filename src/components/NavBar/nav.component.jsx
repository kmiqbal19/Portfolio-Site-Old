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
      window.scrollTo(0, 0);
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
          <li className="nav-list--item">
            <a className="nav-list" href="mailto:km.iqbal01@gmail.com">
              <span className="active">{`</`}</span>contact
              <span className="active">{` >`}</span>
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={clickHandler}>
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
