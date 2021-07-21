import React from "react";
import Typical from "react-typical";
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

          <p className="typing-para">
            <Typical
              steps={[
                "A Frontend Developer",
                4000,
                "An Urban Planner",
                2000,
                "A M.Sc Student",
                2000,
              ]}
              loop={Infinity}
            />
          </p>
        </div>
        <ThreeDElements />
      </section>
      <section id="journey">journey</section>
    </>
  );
}

export default HomePage;
