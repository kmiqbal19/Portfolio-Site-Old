import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { withRouter } from "react-router-dom";
import "./homepage.component.css";
import HeroComponent from "../../components/HeroComponent/hero.component";
import ShootingCube from "../../components/ShootingCubeComponent/shootingcube.component";
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
  useEffect(() => {
    // Main Logo
    gsap.to("#left-ellipse", { fill: "#ddd" });
    gsap.to("#right-ellipse", { fill: "#ddd" });
    gsap.to("#i-main", { fill: "#ddd" });
    // Navbar
    gsap.to("#main-nav", {
      backgroundImage: "linear-gradient(to bottom, transparent, transparent)",
    });
    gsap.to(".nav-list", { color: "#ddd" });
  }, []);
  return (
    <div className="home-container">
      <section id="showcase">
        <HeroComponent />
        <ShootingCube />
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

export default withRouter(HomePage);
