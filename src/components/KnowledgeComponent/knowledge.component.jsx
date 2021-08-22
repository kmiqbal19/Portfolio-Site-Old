import React, { useRef, useEffect } from "react";
import { gsap, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./knowledge.component.css";
function KnowledgeComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let knowledgeContainerRef = useRef(null);
  let spansContainerRef = useRef(null);
  let questionConnectionContainerRef = useRef(null);
  useEffect(() => {
    ScrollTrigger.matchMedia({
      all: function () {
        // ALL KNOWLEGDE KEYWORDS
        const spansKnowledge = document.querySelectorAll(".knowledge");
        gsap.to(spansKnowledge, {
          opacity: 1,
          ease: "ease",
          stagger: 0.6,
          scrollTrigger: {
            trigger: spansContainerRef.current,
            start: "80% bottom",
            end: "80% bottom",
            // markers: true,
            toggleActions: "play none none reverse",
          },
        });
        // Nav Lists
        gsap.to(".nav-list", {
          color: "#1d1b26",
          scrollTrigger: {
            trigger: spansContainerRef.current,
            start: "50% bottom",
            scrub: 1,
          },
        });
        // QUESTION CONNECTIONS
        // Background Color of container
        gsap.to(questionConnectionContainerRef.current, {
          backgroundColor: "black",
          scrollTrigger: {
            trigger: questionConnectionContainerRef.current,
            start: "bottom bottom",
            end: "+=200",
            scrub: 1,
            // markers: true,
          },
        });
        // Nav Lists
        gsap.to(".nav-list", {
          color: "#ddd",
          scrollTrigger: {
            trigger: questionConnectionContainerRef.current,
            start: "bottom bottom",
            scrub: 1,
          },
        });
        // Descriptions
        const spansRemember = document.querySelectorAll(".remember__span");
        const descriptionsTl = gsap.timeline({
          scrollTrigger: {
            trigger: questionConnectionContainerRef.current,
            start: "bottom bottom",
            end: "+=800",
            scrub: 1,
            // markers: true,
            pin: true,
          },
        });
        descriptionsTl
          .to(".wonder-knowledge", {
            opacity: 1,
            ease: "ease",
            y: -5,
            duration: 1,
          })
          .to(".wonder-knowledge", { opacity: 0, duration: 1 })
          .to(spansRemember, {
            opacity: 1,
            ease: Elastic.easeOut,
            stagger: 0.5,
          });
      },
    });
  }, []);
  return (
    <div ref={knowledgeContainerRef} className="knowledge-container">
      <div ref={spansContainerRef} className="knowledge-container__spans">
        <span className="knowledge design-knowledge">DESIGN</span>
        <span className="knowledge frontend-knowledge">Frontend</span>
        <span className="knowledge development-knowledge">DEVELOPMENT</span>
        <span className="knowledge urban-knowledge">URBAN</span>
        <span className="knowledge planning-knowledge">Planning</span>
        <span className="knowledge engineering-knowledge">ENGINEERING</span>
        <span className="knowledge illustration-knowledge">ILLUSTRATION</span>
        <span className="knowledge projects-knowledge">PROJECTS</span>
        <span className="knowledge safety-knowledge">Safety</span>
        <span className="knowledge ms-knowledge">M.Sc</span>
      </div>
      <div
        ref={questionConnectionContainerRef}
        className="question-connection__container"
      >
        <span className="question-connection__mark">?</span>
        <span className="wonder-knowledge">
          SOMETIMES I WONDER WHERE IS THE CONNECTION BETWEEN ALL THESE ...
        </span>
        <div className="remember__span--container">
          <span className="then-knowledge remember__span">THEN THIS QUOTE</span>
          <span className="i-knowledge remember__span">PACIFIES LITTLE</span>
          <span className="remember-knowledge remember__span">MY QUESTION</span>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeComponent;
