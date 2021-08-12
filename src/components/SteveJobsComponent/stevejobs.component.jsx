import React, { useRef, useEffect } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./stevejobs.component.css";
import ring from "../../assets/Images/ring.png";

function StevejobsComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let containerRef = useRef(null);
  let ring1Ref = useRef(null);
  let ring2Ref = useRef(null);
  let steveQuoteContainerRef = useRef(null);
  useEffect(() => {
    gsap.to(ring1Ref.current, {
      rotate: 360,
      duration: 2,
      repeat: -1,
      transformOrigin: "center",
      ease: "linear",
    });
    gsap.to(ring2Ref.current, {
      rotate: 360,
      duration: 8,
      repeat: -1,
      transformOrigin: "center",
      ease: "linear",
    });
    // Rings movement
    const ringMoveTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "98% bottom",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });
    ringMoveTl
      .to(ring2Ref.current, { x: 500, duration: 0.5 })
      .to(ring1Ref.current, {
        x: 500,
        ease: Expo.easeIn,
        duration: 0.7,
      })
      .to(steveQuoteContainerRef.current, {
        opacity: 1,
        y: -10,
        ease: "ease",
        duration: 0.5,
        delay: 0.4,
      });
  }, []);

  return (
    <div ref={containerRef} className="stevejobs__container">
      <img ref={ring1Ref} className="ring-img1" src={ring} alt="ring" />
      <img ref={ring2Ref} className="ring-img2" src={ring} alt="ring" />
      <div className="steve-quote__container" ref={steveQuoteContainerRef}>
        <p className="steve-quote">
          “You can't connect the dots looking forward; you can only connect them
          looking backwards. So you have to trust that the dots will somehow
          connect in your future.”
        </p>
        <span className="steve-name">― Steve Jobs</span>
      </div>
    </div>
  );
}

export default StevejobsComponent;
