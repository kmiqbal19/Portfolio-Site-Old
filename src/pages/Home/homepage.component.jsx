import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap/all";
import Typical from "react-typical";
import "./homepage.component.css";
import ThreeDElements from "./Scene/threeD.component.jsx";
import CloudComponent from "../../components/CloudComponent/cloud.component";
import CityComponent from "../../components/CityComponent/city.component";
import ProgrammingComponent from "../../components/ProgrammingComponent/programming.component";
import LoveComponent from "../../components/LoveComponents/love.component";
import HWComponent from "../../components/HWComponent/hw.component";
import LearningComponent from "../../components/LearningComponent/learning.component";
import KnowledgeComponent from "../../components/KnowledgeComponent/knowledge.component";
import StevejobsComponent from "../../components/SteveJobsComponent/stevejobs.component";
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
    <div className="home-container">
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
      <section id="journey3">
        <ProgrammingComponent />
      </section>
      <section id="journey4">
        <LoveComponent />
      </section>
      <section id="journey5">
        <HWComponent />
      </section>
      <section id="journey6">
        <LearningComponent />
      </section>
      <section id="journey7">
        <KnowledgeComponent />
      </section>
      <section id="journey8">
        <StevejobsComponent />
      </section>
    </div>
  );
}

export default HomePage;
