import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./about.component.css";

function AboutPage() {
  useEffect(() => {
    // Main Logo
    gsap.to("#left-ellipse", { fill: "white" });
    gsap.to("#right-ellipse", { fill: "white" });
    gsap.to("#i-main", { fill: "white" });
    // NavBar
    gsap.to("#main-nav", {
      backgroundImage: "linear-gradient(to bottom, #1d1b26 50%, transparent)",
    });
    gsap.to(".nav-list", { color: "white" });
  }, []);
  return (
    <div className="about-container">
      <div className="about-text__container">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor erat, sed diam voluptua. At vero eos et accusam et justo
          duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </p>

        <a href="sdk">
          <i class="fas fa-download"></i> Resume
        </a>
        <ul className="social-links__about--container">
          {/* <li>
            <i class="fab fa-facebook-f"></i>
          </li> */}
          <li>
            <i class="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i class="fab fa-github"></i>
          </li>
        </ul>
      </div>
      <div className="image-container__about"></div>
    </div>
  );
}

export default AboutPage;
