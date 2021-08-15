import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./cloud.component.css";
function CloudComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let containerCloudRef = useRef(null);
  let cloud1Ref = useRef(null);
  let cloud2Ref = useRef(null);
  let paraRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //  Scroll Trigger with Match Media
    ScrollTrigger.matchMedia({
      "(min-width: 300px)": function () {
        // Cloud Scroll
        const cloudBirdScrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerCloudRef.current,
            // markers: true,
            start: "90% bottom",
            end: "+=1800",
            scrub: 3,
            pin: true,
          },
        });
        cloudBirdScrollTimeline
          .to(containerCloudRef.current, 1.5, {
            backgroundImage:
              "linear-gradient(to bottom, rgba(90,222,255,1) 0%, rgba(196,224,232,1) 73%, rgba(0,203,254,1) 100%)",
            delay: 0.5,
          })
          .from(cloud1Ref.current, {
            x: 1500,
            duration: 5,
            delay: 0,
            ease: "SlowMo",
          })
          .from(cloud2Ref.current, {
            x: -1500,
            duration: 5,
            delay: 0,
            ease: "SlowMo",
          })
          // Bird Scroll
          .to(".bird-1", 5, {
            x: 1500,
            delay: 0,
            ease: "SlowMo",
          })
          .to(".bird-2", 5, {
            x: -1350,
            delay: 0,
            ease: "SlowMo",
          });
        // .to(paraRef.current, { opacity: 1, y: -200, ease: "ease", duration: 2 });
        // Bird One
        // gsap.to(".bird-1", { x: -200 });
        const birdOneTimeline = gsap.timeline({ repeat: -1 });
        birdOneTimeline
          .to(".bird-1", {
            y: 10,
            ease: "ease",
            duration: 0.5,
          })
          .to(".bird-1", {
            y: 0,
            ease: "ease",
            duration: 0.5,
          });
        birdOneTimeline
          .to(".movable-part__bird-1", {
            rotate: -20,
            duration: 0.5,
            ease: "ease",
          })
          .to(".movable-part__bird-1", {
            rotate: 0,
            duration: 0.5,
            ease: "ease",
          });
        // Bird Two
        // gsap.to(".bird-2", { x: 400 });
        const birdTwoTimeline = gsap.timeline({ repeat: -1 });
        birdTwoTimeline
          .to(".bird-2", {
            y: 10,
            ease: "ease",
            duration: 0.5,
          })
          .to(".bird-2", {
            y: 0,
            ease: "ease",
            duration: 0.5,
          });
        birdTwoTimeline
          .to(".movable-part__bird-2", {
            transformOrigin: "right",
            rotate: 20,
            duration: 0.5,
            ease: "ease",
          })
          .to(".movable-part__bird-2", {
            transformOrigin: "right",
            rotate: 0,
            duration: 0.5,
            ease: "ease",
          });

        gsap.to(paraRef.current, {
          opacity: 1,
          delay: 1,
          y: -200,
          ease: "ease",
          duration: 5,
          scrollTrigger: {
            trigger: containerCloudRef.current,
            // markers: true,
            start: "90% bottom",
            end: "+=100",
            // toggleActions: "play none reverse reverse",
            scrub: 1,
          },
        });
      },

      "(max-width: 500px)": function () {
        gsap.to(paraRef.current, {
          opacity: 1,
          delay: 1,
          y: -230,
          ease: "ease",
          duration: 5,
          scrollTrigger: {
            trigger: containerCloudRef.current,
            start: "90% bottom",
            end: "+=100",
            scrub: 1,
          },
        });
      },
    });
  }, []);
  return (
    <div ref={containerCloudRef} className="container-cloud">
      <svg
        className="cloud-svg"
        width="1540"
        height="1000"
        viewBox="0 0 1540 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="cloud_component">
          <rect width="1440" height="1024" fill="none" />
          <g className="bird-1">
            <g className="fixed-part__bird-1">
              <path
                id="path5597"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.8282 571.362C85.6473 578.564 104.186 577.404 104.186 577.404C108.853 585.888 114.969 585.4 114.969 585.4C111.312 585.522 106.393 581.311 106.393 581.311L93.4035 582.348H78.4587C76.6301 584.973 84.7645 586.071 84.7645 586.071H91.3856C91.5748 589.062 95.5475 590.036 95.5475 590.036H105.634C116.511 599.304 128.842 597.729 128.842 597.729C140.382 597.485 149.147 587.353 149.147 587.353C151.993 584.058 153.042 585.568 159.177 584.343C167.705 582.641 159.85 580.491 159.85 580.491C154.318 579.634 152.856 580.814 150.849 579.785C148.217 576.742 143.571 576.922 140.096 578.328C135.701 580.667 129.993 581.803 125.441 579.203C119.467 574.634 111.009 566.748 107.213 565.807C102.189 564.563 86.8275 564.913 69 565.807C69 565.807 69.2411 571.784 77.8282 571.362V571.362Z"
                fill="#D0D0D0"
                stroke="#0F0F0E"
                stroke-width="0.397947"
              />
              <path
                id="path5606"
                d="M122.302 580.416C122.302 580.416 110.369 571.524 104.377 569.54C96.7652 567.019 84.3016 567.982 75.8402 568.159"
                stroke="#181817"
                stroke-width="0.397947"
                stroke-linecap="round"
              />
              <path
                id="path5608"
                d="M105.006 589.917C105.006 589.917 106.015 585.278 91.7009 586.865"
                stroke="#161615"
                stroke-width="0.397947"
              />
              <path
                id="path5827"
                d="M163.323 582.401C163.323 582.401 151.819 582.401 151.374 582.228"
                stroke="#0E0E0D"
                stroke-width="0.397947"
                stroke-linecap="round"
              />
              <path
                id="path5829"
                d="M144.541 581.417C144.662 581.521 144.864 581.606 145.114 581.657C145.365 581.708 145.649 581.723 145.922 581.699C146.195 581.675 146.441 581.614 146.621 581.526C146.801 581.437 146.904 581.327 146.914 581.211C146.924 581.095 146.84 580.982 146.676 580.888C146.512 580.795 146.277 580.727 146.008 580.695C145.74 580.663 145.453 580.67 145.195 580.714C144.937 580.757 144.721 580.835 144.582 580.936L145.666 581.193L144.541 581.417Z"
                fill="black"
                stroke="#0E0E0E"
                stroke-width="0.397947"
              />
            </g>
            <g className="movable-part__bird-1">
              <path
                id="path5612"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M161.065 573.01C167.32 572.223 173.921 571.332 179.394 568.022C180.376 567.424 181.935 566.117 180.262 566.008C164.71 566.438 155.696 566.301 143.443 567.107C137.016 567.563 130.127 569.67 126.166 574.895C125.29 576.298 123.351 578.272 126.019 579.408C127.468 580.067 130.119 581.382 130.862 579.142C132.335 575.808 134.811 573.992 138.12 574.455C141.774 574.813 145.258 574.706 149.144 574.461C153.715 574.099 153.101 574.047 161.065 573.01V573.01Z"
                fill="#D0D0D0"
                stroke="#111110"
                stroke-width="0.397947"
              />
              <path
                id="path2186"
                d="M133.353 575.762C136.301 573.13 140.655 569.499 155.051 568.247"
                stroke="#030303"
                stroke-width="0.397947"
                stroke-miterlimit="7.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <g className="bird-2">
            <g className="fixed-part__bird-2">
              <path
                id="path5597_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1254.17 401.362C1246.35 408.564 1227.81 407.404 1227.81 407.404C1223.15 415.888 1217.03 415.4 1217.03 415.4C1220.69 415.522 1225.61 411.311 1225.61 411.311L1238.6 412.348H1253.54C1255.37 414.973 1247.24 416.071 1247.24 416.071H1240.61C1240.43 419.062 1236.45 420.036 1236.45 420.036H1226.37C1215.49 429.304 1203.16 427.729 1203.16 427.729C1191.62 427.485 1182.85 417.353 1182.85 417.353C1180.01 414.058 1178.96 415.568 1172.82 414.343C1164.3 412.641 1172.15 410.491 1172.15 410.491C1177.68 409.634 1179.14 410.814 1181.15 409.785C1183.78 406.742 1188.43 406.922 1191.9 408.328C1196.3 410.667 1202.01 411.803 1206.56 409.203C1212.53 404.634 1220.99 396.748 1224.79 395.807C1229.81 394.563 1245.17 394.913 1263 395.807C1263 395.807 1262.76 401.784 1254.17 401.362V401.362Z"
                fill="#D0D0D0"
                stroke="#0F0F0E"
                stroke-width="0.397947"
              />
              <path
                id="path5606_2"
                d="M1209.7 410.416C1209.7 410.416 1221.63 401.524 1227.62 399.54C1235.23 397.019 1247.7 397.982 1256.16 398.159"
                stroke="#181817"
                stroke-width="0.397947"
                stroke-linecap="round"
              />
              <path
                id="path5608_2"
                d="M1226.99 419.917C1226.99 419.917 1225.98 415.278 1240.3 416.865"
                stroke="#161615"
                stroke-width="0.397947"
              />
              <path
                id="path5827_2"
                d="M1168.68 412.401C1168.68 412.401 1180.18 412.401 1180.63 412.228"
                stroke="#0E0E0D"
                stroke-width="0.397947"
                stroke-linecap="round"
              />
              <path
                id="path5829_2"
                d="M1187.46 411.417C1187.34 411.521 1187.14 411.606 1186.89 411.657C1186.64 411.708 1186.35 411.723 1186.08 411.699C1185.8 411.675 1185.56 411.614 1185.38 411.526C1185.2 411.437 1185.1 411.327 1185.09 411.211C1185.08 411.095 1185.16 410.982 1185.32 410.888C1185.49 410.795 1185.72 410.727 1185.99 410.695C1186.26 410.663 1186.55 410.67 1186.8 410.714C1187.06 410.757 1187.28 410.835 1187.42 410.936L1186.33 411.193L1187.46 411.417Z"
                fill="black"
                stroke="#0E0E0E"
                stroke-width="0.397947"
              />
            </g>
            <g className="movable-part__bird-2">
              <path
                id="path5612_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1170.94 403.01C1164.68 402.223 1158.08 401.332 1152.61 398.022C1151.62 397.424 1150.06 396.117 1151.74 396.008C1167.29 396.438 1176.3 396.301 1188.56 397.107C1194.98 397.563 1201.87 399.67 1205.83 404.895C1206.71 406.298 1208.65 408.272 1205.98 409.408C1204.53 410.067 1201.88 411.382 1201.14 409.142C1199.67 405.808 1197.19 403.992 1193.88 404.455C1190.23 404.813 1186.74 404.706 1182.86 404.461C1178.28 404.099 1178.9 404.047 1170.94 403.01V403.01Z"
                fill="#D0D0D0"
                stroke="#111110"
                stroke-width="0.397947"
              />
              <path
                id="path2186_2"
                d="M1198.65 405.762C1195.7 403.13 1191.34 399.499 1176.95 398.247"
                stroke="#030303"
                stroke-width="0.397947"
                stroke-miterlimit="7.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <g ref={cloud2Ref} className="cloud-2">
            <rect
              id="Rectangle 1"
              x="125"
              y="177"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 2"
              x="479"
              y="293"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 5"
              x="898"
              y="487"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 9"
              x="964"
              y="531"
              width="141"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 11"
              x="43"
              y="676"
              width="165"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 4"
              x="1054"
              y="152"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
          </g>
          <g ref={cloud1Ref} className="cloud-1">
            <rect
              id="Rectangle 10"
              x="87"
              y="641"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 8"
              x="568"
              y="328"
              width="165"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 7"
              x="190"
              y="141"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 6"
              x="1035"
              y="506"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
            <rect
              id="Rectangle 3"
              x="1001"
              y="116"
              width="206"
              height="50"
              rx="25"
              fill="white"
            />
          </g>
        </g>
      </svg>
      <div ref={paraRef} className="description--journey-one">
        <span className="para-one">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </span>
        <span className="para-one">
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </span>
      </div>
    </div>
  );
}

export default CloudComponent;
