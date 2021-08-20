import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
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
import ImportComponent from "../../components/ImportComponent/import.component";
import CreativityComponent from "../../components/CreativityComponent/creativity.component";
import FooterComponent from "../../components/FooterComponent/footer.component";

function HomePage() {
  let heroDivRef = useRef(null);
  useEffect(() => {
    gsap.to(heroDivRef.current, 1.5, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="home-container" data-scroll-section>
      <section id="showcase">
        <div className="hero" ref={heroDivRef}>
          <h3 className="hero-name">
            <span className="hero-name__span">{`// `}</span>K M Iqbal
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
      <section id="journey9">
        <ImportComponent />
      </section>
      <section id="journey10">
        <CreativityComponent />
      </section>
      <section id="journey11">
        <FooterComponent />
      </section>
    </div>
  );
}

export default HomePage;
