import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./shootingcube.component.css";

function ShootingCube() {
  let ShootingCubeRef = useRef(null);
  useEffect(() => {
    //   Animations
    ScrollTrigger.matchMedia({
      "(max-width:1900px)": function () {
        // Cube 1

        gsap.fromTo(
          ".cube-1",
          { x: -150 },
          {
            x: 1500,
            rotate: 360,
            scale: 1.4,
            transformOrigin: "center",
            repeat: -1,
            ease: "ease",
            duration: 16,
            borderRadius: 2,
          }
        );
        // Cube 2
        gsap.fromTo(
          ".cube-2",
          { x: -150 },
          {
            x: 1500,
            scale: 2,
            rotate: -360,
            delay: 1,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            borderRadius: 5,
            duration: 14,
          }
        );
        // Cube 6
        gsap.fromTo(
          ".cube-6",
          { x: 150 },
          {
            x: -1500,
            scale: 0.8,
            rotate: -360,
            delay: 2,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            borderRadius: 5,
            duration: 8,
          }
        );

        // Cube 3
        gsap.fromTo(
          ".cube-3",
          { x: 150 },
          {
            x: -1500,
            scale: 0.5,
            rotate: 360,
            delay: 1,
            transformOrigin: "center",
            repeat: -1,
            ease: Power3.easeOut,
            borderRadius: 2,
            duration: 18,
          }
        );
        // Cube 4
        gsap.fromTo(
          ".cube-4",
          { y: 150 },
          {
            y: -1300,
            rotate: 360,

            transformOrigin: "center",
            repeat: -1,
            ease: Power3.easeOut,
            borderRadius: 2,
            duration: 18,
          }
        );
        // Cube 7
        gsap.fromTo(
          ".cube-7",
          { y: 150 },
          {
            y: -1300,
            rotate: 360,
            delay: 1,
            transformOrigin: "center",
            repeat: -1,
            ease: "ease",
            borderRadius: 5,
            duration: 15,
          }
        );
        // Cube 5
        gsap.fromTo(
          ".cube-5",
          { y: -150 },
          {
            y: 1300,
            rotate: 360,
            delay: 0.5,
            transformOrigin: "center",
            repeat: -1,
            ease: "ease",
            borderRadius: 5,
            duration: 15,
          }
        );
      },
      "(min-width: 1901px)": function () {
        // Cube 1

        gsap.fromTo(
          ".cube-1",
          { x: -450 },
          {
            x: 2100,
            rotate: 720,
            scale: 1.4,
            transformOrigin: "center",
            repeat: -1,
            ease: "ease",
            duration: 16,
            borderRadius: 2,
          }
        );
        // Cube 2
        gsap.fromTo(
          ".cube-2",
          { x: -450 },
          {
            x: 2200,
            scale: 2,
            rotate: -360,
            delay: 1,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            borderRadius: 5,
            duration: 14,
          }
        );
        // Cube 6
        gsap.fromTo(
          ".cube-6",
          { x: 450 },
          {
            x: -2500,
            scale: 0.8,
            rotate: -360,
            delay: 2,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            borderRadius: 5,
            duration: 8,
          }
        );

        // Cube 3
        gsap.fromTo(
          ".cube-3",
          { x: 450 },
          {
            x: -2500,
            scale: 0.5,
            rotate: 360,
            delay: 1,
            transformOrigin: "center",
            repeat: -1,
            ease: Power3.easeOut,
            borderRadius: 2,
            duration: 18,
          }
        );
        // Cube 4
        gsap.fromTo(
          ".cube-4",
          { y: 450 },
          {
            y: -2300,
            rotate: 360,

            transformOrigin: "center",
            repeat: -1,
            ease: Power3.easeOut,
            borderRadius: 2,
            duration: 18,
          }
        );
        // Cube 7
        gsap.fromTo(
          ".cube-7",
          { y: 450 },
          {
            y: -2300,
            rotate: 360,
            delay: 1,
            transformOrigin: "center",
            repeat: -1,
            ease: "ease",
            borderRadius: 5,
            duration: 15,
          }
        );
        // Cube 5
        gsap.fromTo(
          ".cube-5",
          { y: -450 },
          {
            y: 2300,
            rotate: 360,
            delay: 0.5,
            transformOrigin: "center",
            repeat: -1,
            ease: "ease",
            borderRadius: 5,
            duration: 15,
          }
        );
      },
    });
  }, []);

  return (
    <div className="shootingcube-container" ref={ShootingCubeRef}>
      <div className="cube cube-1"></div>
      <div className="cube cube-2"></div>
      <div className="cube cube-3"></div>
      <div className="cube cube-4"></div>
      <div className="cube cube-5"></div>
      <div className="cube cube-6"></div>
      <div className="cube cube-7"></div>
    </div>
  );
}

export default ShootingCube;
