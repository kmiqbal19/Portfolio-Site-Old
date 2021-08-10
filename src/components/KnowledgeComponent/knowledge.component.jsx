import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./knowledge.component.css";
function KnowledgeComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let knowledgeContainerRef = useRef(null);
  let spansContainerRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <div ref={knowledgeContainerRef} className="knowledge-container">
      <div ref={spansContainerRef} className="knowledge-container__spans">
        <span className="design-knowledge">DESIGN</span>
        <span className="frontend-knowledge">Frontend</span>
        <span className="development-knowledge">DEVELOPMENT</span>
        {/* <span className="urban-knowledge">URBAN</span> */}
        <span className="planning-knowledge">Planning</span>
        <span className="engineering-knowledge">ENGINEERING</span>
        <span className="illustration-knowledge">ILLUSTRATION</span>
        <span className="projects-knowledge">PROJECTS</span>
        <span className="safety-knowledge">Safety</span>
        <span className="ms-knowledge">MS</span>
      </div>
    </div>
  );
}

export default KnowledgeComponent;
