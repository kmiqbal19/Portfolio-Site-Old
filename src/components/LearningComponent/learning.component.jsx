import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./learning.component.css";
import leftMountain from "../../assets/Images/left-mountain.png";
import rightMountain from "../../assets/Images/right-mountain.png";
import sittingMan from "../../assets/Images/man.png";
import backgroundImage from "../../assets/Images/bg-image.jpg";
import cloud1 from "../../assets/Images/clouds_1.png";
import cloud2 from "../../assets/Images/clouds_2.png";
function LearningComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let learningContainerRef = useRef(null);
  let backgroundImageRef = useRef(null);
  let leftMountainRef = useRef(null);
  let rightMountainRef = useRef(null);
  let sittingManRef = useRef(null);
  let cloudOneRef = useRef(null);
  let cloudTwoRef = useRef(null);
  let textRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      "(min-width: 600px)": function () {
        gsap.to(backgroundImageRef.current, {
          scale: 1.3,
          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",
            // markers: {
            //   fontSize: 20,
            //   startColor: "blue",
            //   endColor: "green",
            // },
            pin: true,
            pinSpacing: true,
          },
        });
        gsap.to(sittingManRef.current, {
          scale: 0.8,
          transformOrigin: "bottom",
          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",
            // markers: true,
            pin: true,
            pinSpacing: true,
          },
        });
        gsap.to(leftMountainRef.current, {
          x: -300,

          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",
            // markers: true,
            pin: true,
            pinSpacing: true,
          },
        });
        gsap.to(rightMountainRef.current, {
          x: 300,

          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",
            // markers: true,
            pin: true,
            pinSpacing: true,
          },
        });
        gsap.to(cloudOneRef.current, {
          x: 200,
          y: -100,
          scale: 1.3,
          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",
            // markers: true,
            pin: true,
            pinSpacing: true,
          },
        });
        gsap.to(cloudTwoRef.current, {
          x: -200,
          y: -100,
          scale: 1.3,

          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",
            // markers: true,
            pin: true,
            pinSpacing: true,
          },
        });
        // For Text
        // gsap.from(textRef.current, {
        //   fontSize: "40",
        //   scrollTrigger: {
        //     trigger: learningContainerRef.current,
        //     scrub: 3,
        //     start: "bottom bottom",

        //     end: "+=1000",
        //     // markers: true,
        //     pin: true,
        //     pinSpacing: true,
        //   },
        // });
      },
      "(max-width:599px)": function () {
        gsap.to(backgroundImageRef.current, {
          scale: 1.3,
          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",

            pin: true,
            pinSpacing: true,
          },
        });

        gsap.fromTo(
          leftMountainRef.current,
          {
            x: -50,
          },
          {
            x: -300,
            scrollTrigger: {
              trigger: learningContainerRef.current,
              scrub: 3,
              start: "bottom bottom",

              end: "+=1000",
              // markers: true,
              pin: true,
              pinSpacing: true,
            },
          }
        );
        gsap.fromTo(
          rightMountainRef.current,
          {
            x: -110,
          },
          {
            x: 0,
            scrollTrigger: {
              trigger: learningContainerRef.current,
              scrub: 3,
              start: "bottom bottom",

              end: "+=1000",
              // markers: true,
              pin: true,
              pinSpacing: true,
            },
          }
        );
        gsap.fromTo(
          cloudOneRef.current,
          { x: -150, y: 0 },
          {
            x: 200,
            y: -100,
            scale: 1.5,
            scrollTrigger: {
              trigger: learningContainerRef.current,
              scrub: 3,
              start: "bottom bottom",

              end: "+=1000",
              // markers: true,
              pin: true,
              pinSpacing: true,
            },
          }
        );
        gsap.to(cloudTwoRef.current, {
          x: -200,
          y: -100,
          scale: 1.3,

          scrollTrigger: {
            trigger: learningContainerRef.current,
            scrub: 3,
            start: "bottom bottom",

            end: "+=1000",
            // markers: true,
            pin: true,
            pinSpacing: true,
          },
        });

        gsap.fromTo(
          sittingManRef.current,
          { x: -50 },
          {
            scale: 0.8,
            transformOrigin: "bottom",
            scrollTrigger: {
              trigger: learningContainerRef.current,
              scrub: 3,
              start: "bottom bottom",

              end: "+=1000",
              // markers: true,
              pin: true,
              pinSpacing: true,
            },
          }
        );
      },
      "(max-width:450px)": function () {
        gsap.fromTo(
          cloudOneRef.current,
          { x: -80, y: 0 },
          {
            x: 200,
            y: -100,
            scale: 1.5,
            scrollTrigger: {
              trigger: learningContainerRef.current,
              scrub: 3,
              start: "bottom bottom",

              end: "+=1000",
              // markers: true,
              pin: true,
              pinSpacing: true,
            },
          }
        );
      },
    });
  }, []);
  return (
    <div ref={learningContainerRef} className="learning-container">
      <img
        ref={backgroundImageRef}
        src={backgroundImage}
        alt="background"
        className="bg-parallax"
      />
      <h2 ref={textRef} className="heading-parallax">
        Learning is a Never-
        <span className="heading-parallax__span">Ending Journey...</span>
      </h2>
      <img
        ref={leftMountainRef}
        src={leftMountain}
        alt="left-mountain"
        className="left-mountain__parallax"
      />
      <img
        ref={rightMountainRef}
        src={rightMountain}
        alt="right-mountain"
        className="right-mountain__parallax"
      />
      <img
        ref={sittingManRef}
        src={sittingMan}
        alt="sitting-man"
        className="sitting-man__parallax"
      />
      <img
        ref={cloudOneRef}
        src={cloud1}
        alt="cloud1"
        className="cloud-1__parallax"
      />
      <img
        ref={cloudTwoRef}
        src={cloud2}
        alt="cloud2"
        className="cloud-2__parallax"
      />
    </div>
  );
}

export default LearningComponent;
