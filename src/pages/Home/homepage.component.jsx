import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap/all";
import Typical from "react-typical";
import "./homepage.component.css";
import ThreeDElements from "./Scene/threeD.component.jsx";
import CloudComponent from "../../components/CloudComponent/cloud.component";
import CityComponent from "../../components/CityComponent/city.component";
function HomePage() {
  let heroDiv = useRef(null);
  useEffect(() => {
    TweenMax.to(heroDiv, 1.5, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="container">
      <section id="showcase">
        <div
          className="hero"
          ref={(el) => {
            heroDiv = el;
          }}
        >
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
      <section id="journey1">
        <CloudComponent />
      </section>
      <section id="journey2">
        <CityComponent />
      </section>
      <section id="journey3"></section>
    </div>
  );
}

export default HomePage;
