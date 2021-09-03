import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./about.component.css";
import Nav from "../../components/NavBar/nav.component";
import Resume from "./CV_Final.pdf";
function AboutPage() {
  let textContainerRef = useRef(null);
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
    // text container
    gsap.from(textContainerRef.current, {
      opacity: 0,
      y: -30,
      ease: "ease",
      duration: 1,
    });
  }, []);
  return (
    <>
      <Nav />
      <div className="about-container">
        <div ref={textContainerRef} className="about-text__container">
          <h2>About Me</h2>
          <p>
            I am a creative frontend developer. My frondend works are mostly
            influenced by animations, interactions, UI and imaginations. I
            always try to aquire diversified knowledge. As you know human brain
            can hold 4.7 billion books. So I believe not only science ,
            engineering , programming is important in my life, but also i need
            social , law , cultute, history to know.
            <q>
              "Anyone who only understands chemistry, doesn’t even understand
              that correctly."
            </q>
            -<em>Georg Christoph Lichtenberg</em>. But after all I am really
            passionate about programming and i am very enthusiastic about
            javaScript. My goal is to become a better and up-to-date web
            developer. I am a self motivated and hard working person, focused to
            my work. If you can think , I can ink it for you.
          </p>

          <a className="resume-download" href={Resume}>
            <i class="fas fa-download"></i> Resume
          </a>
          <ul className="social-links__about--container">
            <a href="https://www.linkedin.com/in/k-m-iqbal-96a112146">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/kmiqbal19">
              <i class="fab fa-github"></i>
            </a>
          </ul>
        </div>
        <div className="image-container__about"></div>
      </div>
    </>
  );
}

export default AboutPage;
