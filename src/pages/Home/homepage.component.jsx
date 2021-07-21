import React from "react";

import "./homepage.component.css";
import ThreeDElements from "./Scene/threeD.component.jsx";
function HomePage() {
  return (
    <>
      <section id="showcase">
        <div className="hero">
          <h3 className="hero-name">
            <span>{`</`}</span>K M Iqbal<span>{`>`}</span>
          </h3>
          <h1 className="hero-occupation">Frontend Developer</h1>
        </div>
        <ThreeDElements />
      </section>
      <section id="journey">journey</section>
    </>
  );
}

export default HomePage;
