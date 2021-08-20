import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./import.component.css";

function ImportComponent() {
  const curlyBracketRight = "}";
  const curlyBracketLeft = "{";
  gsap.registerPlugin(ScrollTrigger);
  let containerRef = useRef(null);

  useEffect(() => {
    const wrappers = document.querySelectorAll(".function-wrapper__import");
    const animeContents = document.querySelectorAll(".anime-import");
    gsap.to(animeContents, {
      opacity: 1,
      duration: 1,
      // ease: "ease",
      stagger: 0.1,

      scrollTrigger: {
        trigger: containerRef.current,
        start: "30% center",
        end: "30% center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.to(wrappers, {
      opacity: 1,
      duration: 1,
      ease: "ease",
      stagger: 0.3,
      delay: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "60% bottom",
        end: "60% bottom",

        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  }, []);
  return (
    <div ref={containerRef} className="import-container">
      <span className="import-text__import anime-import">import</span>
      <span className="memory-text__import anime-import">
        {curlyBracketLeft} Memory {curlyBracketRight}
      </span>
      <span className="from-text__import anime-import">from</span>
      <span className="brainpath-text__import anime-import">
        "../../iqbalsBrain/Memory.js"
      </span>
      {/* UseEffect Text */}
      <span className="useeffect-text__import anime-import">
        useEffect<span className="parenthesis__single-text__import">(</span>
        <span className="parenthesis-text__import">( )</span>
        {"  "}
        <span className="arrowfunc-text__import">
          =<i class="fas fa-angle-right fa-sm"></i>
        </span>
        <span className="curlyleft-text__import">{curlyBracketLeft}</span>
        <br />
        <span className="function-wrapper__import">
          study<span className="parenthesis-text__import">( )</span>
          <span className="semicolon-text__import">;</span>
        </span>
        <br />
        <span className="function-wrapper__import">
          code<span className="parenthesis-text__import">( )</span>
          <span className="semicolon-text__import">;</span>
        </span>
        <br />
        <span className="function-wrapper__import">
          drinkCoffee<span className="parenthesis-text__import">( )</span>
          <span className="semicolon-text__import">;</span>
        </span>
        <br />
        <span className="function-wrapper__import">
          hangout<span className="parenthesis-text__import">( )</span>
          <span className="semicolon-text__import">;</span>
        </span>
        <br />
        <span className="curlyright-text__import">{curlyBracketRight}</span>
        <span className="semicolon-text__import">,</span>
        <span className="dependencyarray-text__import">
          [<span className="dependency-text__import"> Memory </span>]
        </span>
        <span className="parenthesis__single-text__import">)</span>
      </span>
    </div>
  );
}

export default ImportComponent;
