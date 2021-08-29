import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.component.css";
import stateBuilt from "./stateBuiltwith";
import bgImage from "../../../src/assets/Images/bg-thankyou.png";
function FooterComponent() {
  let footerContainerRef = useRef(null);
  let loseFearRef = useRef(null);
  let bgFooterRef = useRef(null);
  const [infoClick, setInfoClicked] = useState(false);
  const clickHandler = () => setInfoClicked(!infoClick);
  useEffect(() => {
    ScrollTrigger.matchMedia({
      all: function () {
        gsap.to(loseFearRef.current, {
          y: -20,
          opacity: 1,
          ease: "ease",
          duration: 1,
          scrollTrigger: {
            trigger: footerContainerRef.current,
            start: "98% bottom",
            toggleActions: "play none none reverse",
          },
        });
        gsap.to(bgFooterRef.current, {
          opacity: 1,
          ease: "ease",
          duration: 3,
          scrollTrigger: {
            trigger: footerContainerRef.current,
            start: "90% bottom",
            toggleActions: "play none none reverse",
          },
        });
      },
    });
  }, []);
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
    <div ref={footerContainerRef} className="footer-container">
      <img
        ref={bgFooterRef}
        className="bg-footer"
        src={bgImage}
        alt="bg-thankyou"
      />
      <div ref={loseFearRef} className="losefear-footer">
        <p className="thankyou__footer">
          <span>Thanks</span> for checking out my website!
        </p>
        <span className="losefear-footer__text">
          {"// To be creative, lose the fear of being wrong..."}
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
      <p className="checkout-projects__footer">
        Check out my <span>projects</span> for more details...
      </p>
    </div>
  );
}

export default FooterComponent;
