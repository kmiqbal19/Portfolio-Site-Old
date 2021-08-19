import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.component.css";
import stateBuilt from "./stateBuiltwith";
function FooterComponent() {
  const [infoClick, setInfoClicked] = useState(false);
  const clickHandler = () => setInfoClicked(!infoClick);

  const BuiltWith = () => {
    return stateBuilt.map((tool, index) => {
      return (
        <div key={index} className="tool-container--footer">
          <div className="toolLogo-container__builtwith--footer">
            <img
              className="toolLogo__builtwith--footer"
              src={tool.toolLogo}
              alt={tool.logoName}
            />
          </div>
          <div className="toolName__builtwith--footer">{tool.toolName}</div>
          <div className="toolDescription__builtwith--footer">
            {tool.toolDescription}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="footer-container">
      <div className="losefear-footer">
        <span className="thankyou__footer">
          Thank you for checking out my website!
        </span>
        <span className="losefear-footer__text">
          {"// To be creative, lose the fear of being wrong.."}
        </span>
      </div>
      <div className="designed-footer">
        <span className="designed-footer__text">Portfolio 2021</span>
        <span className="designed-footer__text">
          &#169; Designed and developed by me{" "}
          <span
            className="info-builtwith__footer"
            onClick={() => clickHandler()}
          >
            info
          </span>
          .
        </span>
        <div
          className={
            infoClick ? "built-with__footer" : "built-with__footer hidden"
          }
        >
          <span className="builtwith-footer__text">
            Built with <i class="fas fa-heart"></i>
          </span>
          <BuiltWith />
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
