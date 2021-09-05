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
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      all: function () {
        // Ring Rotation
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
      },
      "(min-width: 2201px) ": function () {
        // Rings movement
        const ringMoveTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "play none none reverse",
          },
        });
        ringMoveTl
          .to(ring2Ref.current, {
            x: 1100,
            duration: 0.5,
            scale: 1.2,
            y: 150,
            transformOrigin: "center",
          })
          .to(ring1Ref.current, {
            x: 1100,
            scale: 1.2,
            y: 150,
            transformOrigin: "center",
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
      },
      "(min-width: 1801px) and (max-width:2200px)": function () {
        // Rings movement
        const ringMoveTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "play none none reverse",
          },
        });
        ringMoveTl
          .to(ring2Ref.current, { x: 800, duration: 0.5 })
          .to(ring1Ref.current, {
            x: 800,
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
      },
      "(min-width: 1350px) and (max-width:1800px)": function () {
        // Rings movement
        const ringMoveTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
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
      },
      "(min-width: 1050px) and (max-width: 1349px)": function () {
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
          .to(ring2Ref.current, { x: 350, duration: 0.5 })
          .to(ring1Ref.current, {
            x: 350,
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
      },
      "(min-width: 900px) and (max-width: 1049px)": function () {
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
          .to(ring2Ref.current, { x: 350, duration: 0.5 })
          .to(ring1Ref.current, {
            x: 350,
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
      },
      "(min-width: 751px) and (max-width: 899px)": function () {
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
          .to(ring2Ref.current, { x: 250, duration: 0.5 })
          .to(ring1Ref.current, {
            x: 250,
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
      },
      "(min-width: 600px) and (max-width: 750px)": function () {
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
          .to(ring2Ref.current, { x: 140, duration: 0.5 })
          .to(ring1Ref.current, {
            x: 140,
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
      },
      "(min-width: 200px) and (max-width: 599px)": function () {
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
          .to(ring2Ref.current, { y: 340, duration: 0.7 })
          .to(ring1Ref.current, {
            y: 340,
            ease: Expo.easeIn,
            duration: 1,
          })
          .to(steveQuoteContainerRef.current, {
            opacity: 1,
            y: -10,
            ease: "ease",
            duration: 0.5,
            delay: 0.4,
          });
      },
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
