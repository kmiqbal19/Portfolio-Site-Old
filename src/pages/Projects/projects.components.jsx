import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./projects.component.css";
import ProjectList from "./projectList";
import useLocoScroll from "../../hooks/useLocoScroll";
function ProjectsPage() {
  useLocoScroll(".projects-wrapper");
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".project__image--container-1", {
      y: -20,
      ease: "ease",
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".project__container-1",
        start: "90% bottom",
        toggleActions: "play none none reverse",
        scroller: ".projects-wrapper",
      },
    });
    gsap.to(".project__image--container-2", {
      y: -20,
      ease: "ease",
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".project__container-2",
        start: "90% bottom",
        toggleActions: "play none none reverse",
        scroller: ".projects-wrapper",
      },
    });
    gsap.to(".project__image--container-3", {
      y: -20,
      ease: "ease",
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".project__container-3",
        start: "90% bottom",
        toggleActions: "play none none reverse",
        scroller: ".projects-wrapper",
      },
    });
  }, []);
  const ProjectsGen = () => {
    return ProjectList.map((project, index) => {
      return (
        <div className={`project__container project__container-${index + 1}`}>
          <div
            className={`project__image--container project__image--container-${
              index + 1
            }`}
          >
            <img
              className="project__image"
              src={project.projectImage}
              alt={project.projectImageName}
            />
          </div>
          <div className={`project__bg project__bg--${index + 1}`}>
            {/* <img src="" alt="fs" /> */}
            <p className="project-number">{project.projectNumber}</p>
          </div>
          <div className="project__description--container">
            <p className="project__description--heading">
              {project.projectHeading}
            </p>
            <a className="live-button__project" href={project.projectLink}>
              See Live
            </a>
            <p className="project__description--para">
              {project.projectDescription}
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="projects-wrapper">
      <ProjectsGen />
      {/* <div className="project__container">
        <div className="project__image--container">
          <img className="project__image" src={image} alt="fs" />
        </div>
        <div className="project__bg">
          <img src="" alt="fs" />
          <p className="project-number">01</p>
        </div>
        <div className="project__description--container">
          <p className="project__description--heading"> Crown Clothings</p>
          <a className="live-button__project" href="fsd">
            See Live
          </a>
          <p className="project__description--para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt
            eget. Facilisis sed odio morbi quis. Augue ut lectus arcu bibendum
            at varius vel pharetra.{" "}
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default ProjectsPage;
