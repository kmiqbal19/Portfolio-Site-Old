import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hw.component.css";

function HWComponent() {
  // GSAP Registrations
  gsap.registerPlugin(ScrollTrigger);

  //   References
  let hwContainerRef = useRef(null);
  let hwSvgRef = useRef(null);
  let paraRef = useRef(null);
  // Effects after Mounted
  useEffect(() => {
    ScrollTrigger.matchMedia({
      all: function () {
        // left arm
        const leftArmHWTl = gsap.timeline({ repeat: -1 });
        leftArmHWTl
          .to(".left-arm__hw", {
            rotate: -10,
            ease: "ease",
            duration: 0.5,
            transformOrigin: "bottom",
          })
          .to(".left-arm__hw", {
            rotate: 0,
            ease: "ease",
            duration: 0.5,
            transformOrigin: "bottom",
          });
        // right arm
        const rightArmHWTl = gsap.timeline({ repeat: -1 });
        rightArmHWTl
          .to(".right-arm__hw", {
            rotate: -8,
            ease: "ease",
            duration: 0.5,
            transformOrigin: "bottom",
            delay: 0.5,
          })
          .to(".right-arm__hw", {
            rotate: 0,
            ease: "ease",
            duration: 0.5,
            transformOrigin: "bottom",
          });
        // head and sunglass
        const headGlassHWTl = gsap.timeline({ repeat: -1 });
        headGlassHWTl
          .to(".sunglass__hw", {
            rotate: -8,
            ease: "ease",
            duration: 1,
            transformOrigin: "right",
          })
          .to(".sunglass__hw", {
            rotate: 0,
            ease: "ease",
            duration: 1,
            transformOrigin: "right",
          });
        // Sun
        gsap.to(".sun-body__hw", {
          rotate: 360,
          transformOrigin: "center",
          repeat: -1,
          ease: "linear",
          duration: 8,
        });
        // // BUT
        // gsap.to(".but-hw", {
        //   opacity: 1,
        //   duration: 0.1,
        //   ease: "ease",
        //   scrollTrigger: {
        //     trigger: ".but-hw__container",
        //     start: "300% bottom",
        //     end: "300% bottom",
        //     // markers: true,
        //   },
        // });
        // Nav Lists
        gsap.to(".nav-list", {
          color: "#ddd",
          scrollTrigger: {
            trigger: hwSvgRef.current,
            start: "bottom bottom",
            scrub: 1,
          },
        });
      },
      "(min-width:751px)": function () {
        // Moon Sun Star Scroll
        const moonSunHWTl = gsap.timeline({
          scrollTrigger: {
            trigger: hwSvgRef.current,
            start: "75% bottom",
            end: "+=1500",
            scrub: 1,
            // markers: true,
            pin: true,
          },
        });
        moonSunHWTl
          .fromTo(
            ".sun__hw",
            { opacity: 1, x: -450, y: -500, scale: 0.5 },
            { y: -400, x: 1200, scale: 1 }
          )
          .fromTo(
            ".moon__hw",
            { x: -300, y: -150, scale: 0.5 },
            { y: -100, x: 1000, scale: 0.8 }
          )
          .to(".star-hw", { opacity: 1 });
        // Background Scroll
        const containerColorHWTl = gsap.timeline({
          scrollTrigger: {
            trigger: hwSvgRef.current,
            start: "75% bottom",
            end: "+=1500",
            scrub: 3,
            // markers: true,
            pin: true,
          },
        });
        containerColorHWTl
          .to(hwContainerRef.current, { backgroundColor: "#ffd7b5" })
          .to(hwContainerRef.current, { backgroundColor: "black" });
      },
      "(max-width:750px)": function () {
        // Moon Sun Star Scroll
        const moonSunHWTl = gsap.timeline({
          scrollTrigger: {
            trigger: hwSvgRef.current,
            start: "40% 30%",
            end: "+=1500",
            scrub: 1,
            // markers: true,
            pin: true,
          },
        });
        moonSunHWTl
          .fromTo(
            ".sun__hw",
            { opacity: 1, x: -450, y: -500, scale: 0.5 },
            { y: -400, x: 1200, scale: 1 }
          )
          .fromTo(
            ".moon__hw",
            { x: -300, y: -150, scale: 0.5 },
            { y: -100, x: 1000, scale: 0.8 }
          )
          .to(".star-hw", { opacity: 1 });
        // Background Scroll
        const containerColorHWTl = gsap.timeline({
          scrollTrigger: {
            trigger: hwSvgRef.current,
            start: "40% 30%",
            end: "+=1500",
            scrub: 3,
            // markers: true,
            pin: true,
          },
        });
        containerColorHWTl
          .to(hwContainerRef.current, { backgroundColor: "#ffd7b5" })
          .to(hwContainerRef.current, { backgroundColor: "black" });
      },
    });
  }, []);
  return (
    <div ref={hwContainerRef} className="hw-container">
      <svg
        className="hw-svg"
        ref={hwSvgRef}
        width="1440"
        height="1024"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="hw-frame">
          <rect width="1440" height="1024" fill="none" />
          <ellipse
            className="shadow-hw"
            cx="1013"
            cy="783.5"
            rx="350"
            ry="95.5"
            fill="#C4C4C4"
          />
          <g className="pedestrian-coder">
            <g id="layer1">
              <g id="laptop__hw">
                <path
                  id="path3354"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1074.76 485.5V502.667L1056.26 522V502.667L1074.76 485.5Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.227796"
                />
                <path
                  id="path3338"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M836.26 403.5L844.26 400.5L903.76 504L903.76 521L836.26 403.5Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.227796"
                />
                <path
                  id="path3340"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M904.26 503V520.584C953.207 526.451 1003.49 529.044 1058.26 520.584V503H904.26Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.227796"
                />
                <path
                  id="path3350"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M844.51 400.071L925.01 389.571L978.01 487.571L904.01 504.071L844.51 400.071Z"
                  fill="#666666"
                  stroke="black"
                  stroke-width="0.227796"
                />
                <path
                  id="path3352"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M906.26 503L977.26 486H1075.76L1056.69 503H906.26Z"
                  fill="#B3B3B3"
                  stroke="black"
                  stroke-width="0.227796"
                />
                <g id="text3356">
                  <path
                    id="path3852"
                    d="M878.494 449.203L877.771 449.368L876.878 447.112C876.368 447.217 875.839 447.273 875.29 447.278C874.739 447.278 874.164 447.224 873.565 447.116L873.036 445.766C873.653 445.974 874.244 446.103 874.81 446.154C875.378 446.198 875.931 446.162 876.468 446.045L875.127 442.625C873.991 442.688 873.096 442.56 872.441 442.241C871.791 441.921 871.318 441.385 871.024 440.635C870.705 439.82 870.715 439.118 871.056 438.528C871.397 437.938 872.045 437.496 873.001 437.202L872.309 435.44L873.032 435.275L873.714 437.015C874.17 436.933 874.624 436.884 875.074 436.869C875.523 436.848 875.973 436.86 876.426 436.903L876.941 438.216C876.459 438.097 875.983 438.029 875.514 438.01C875.05 437.991 874.592 438.022 874.141 438.103L875.397 441.305C876.559 441.231 877.486 441.36 878.178 441.693C878.87 442.025 879.369 442.581 879.675 443.361C880.006 444.206 879.993 444.936 879.636 445.552C879.282 446.161 878.604 446.621 877.602 446.931L878.493 449.203L878.494 449.203ZM874.621 441.335L873.416 438.26C872.882 438.452 872.521 438.715 872.331 439.047C872.141 439.379 872.132 439.765 872.304 440.205C872.473 440.635 872.739 440.939 873.103 441.117C873.472 441.295 873.978 441.367 874.621 441.335V441.335ZM875.909 442.61L877.182 445.858C877.761 445.633 878.15 445.349 878.351 445.003C878.556 444.657 878.571 444.259 878.394 443.809C878.222 443.369 877.935 443.053 877.534 442.861C877.138 442.668 876.597 442.584 875.909 442.61V442.61Z"
                    fill="#1EF50C"
                  />
                  <path
                    id="path3854"
                    d="M880.969 437.895L880.428 436.527L891.251 437.875L891.744 439.122L883.686 444.764L883.145 443.396L889.645 438.928L880.969 437.895V437.895Z"
                    fill="#1EF50C"
                  />
                  <path
                    id="path3856"
                    d="M905.746 429.175L906.376 430.774C905.692 430.412 905.022 430.177 904.364 430.071C903.712 429.963 903.069 429.981 902.436 430.125C901.19 430.409 900.39 431.019 900.038 431.955C899.683 432.887 899.798 434.093 900.381 435.574C900.963 437.05 901.739 438.106 902.711 438.741C903.681 439.371 904.789 439.544 906.035 439.26C906.668 439.116 907.218 438.863 907.685 438.5C908.157 438.136 908.548 437.66 908.857 437.072L909.481 438.655C909.107 439.133 908.666 439.528 908.158 439.84C907.654 440.151 907.081 440.38 906.438 440.526C904.788 440.902 903.284 440.68 901.926 439.86C900.567 439.035 899.533 437.725 898.826 435.928C898.116 434.127 898.032 432.6 898.573 431.348C899.112 430.091 900.207 429.275 901.858 428.899C902.51 428.751 903.159 428.701 903.804 428.75C904.453 428.794 905.1 428.935 905.746 429.175V429.175Z"
                    fill="#1EF50C"
                  />
                  <path
                    id="path3858"
                    d="M912.846 427.694C911.772 427.939 911.079 428.544 910.768 429.509C910.462 430.474 910.589 431.664 911.148 433.081C911.705 434.492 912.46 435.537 913.414 436.215C914.373 436.891 915.389 437.107 916.464 436.863C917.538 436.618 918.226 436.014 918.527 435.051C918.833 434.087 918.708 432.899 918.151 431.487C917.592 430.07 916.835 429.023 915.881 428.346C914.932 427.667 913.921 427.45 912.846 427.694ZM912.36 426.463C913.894 426.114 915.328 426.363 916.663 427.21C917.996 428.053 919.012 429.36 919.711 431.132C920.408 432.899 920.506 434.415 920.005 435.68C919.502 436.941 918.483 437.745 916.95 438.094C915.411 438.444 913.973 438.199 912.636 437.357C911.303 436.515 910.287 435.208 909.588 433.436C908.888 431.664 908.79 430.148 909.294 428.888C909.8 427.621 910.822 426.813 912.36 426.463Z"
                    fill="#1EF50C"
                  />
                  <path
                    id="path3860"
                    d="M922.094 425.782L925.531 434.499L927.316 434.092C928.823 433.749 929.787 433.148 930.208 432.289C930.634 431.428 930.549 430.242 929.953 428.73C929.361 427.229 928.577 426.21 927.6 425.674C926.626 425.132 925.386 425.033 923.879 425.376L922.094 425.782ZM920.124 424.872L923.16 424.181C925.277 423.7 927.009 423.799 928.357 424.48C929.702 425.155 930.753 426.454 931.511 428.376C932.273 430.308 932.335 431.84 931.697 432.972C931.06 434.105 929.687 434.911 927.58 435.39L924.544 436.081L920.124 424.872V424.872Z"
                    fill="#1EF50C"
                  />
                  <path
                    id="path3862"
                    d="M931.967 422.143L938.829 420.58L939.331 421.855L933.937 423.084L935.24 426.4L940.409 425.223L940.91 426.498L935.741 427.676L937.337 431.735L942.862 430.476L943.363 431.752L936.37 433.345L931.967 422.143Z"
                    fill="#1EF50C"
                  />
                </g>
              </g>
              <path
                className="right-arm__hw"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1223 403V494L1049.3 484.9L1030 463.06L1150.62 457.6L1174.75 403H1223Z"
                fill="#CF3B3B"
                stroke="black"
                stroke-width="0.414126"
              />
              <path
                id="body-hw"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1159.72 402.988C1145.24 417.45 1140.48 438.386 1138.76 457.471C1135.43 494.181 1159.72 566.436 1159.72 566.436H1243.59C1243.59 566.436 1257.76 479.867 1243.59 439.31C1236.28 418.42 1226.01 390.43 1201.65 384.827C1186.55 381.353 1169.96 392.762 1159.72 402.988Z"
                fill="#CF3B3B"
                stroke="black"
                stroke-width="0.414126"
              />
              <path
                className="right-leg__hw"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1240.97 563.979C1240.97 563.979 1246.91 594.224 1242.37 612.993C1240.34 621.387 1227.78 637.031 1217.9 637.315L1127.79 639.904L1188.92 727.321L1168.48 746.077C1168.48 746.077 1074.56 674.011 1067.26 640.405C1064.37 627.121 1092.71 606.883 1103.48 596.998C1125.02 577.228 1157.14 566.387 1157.14 566.387L1240.97 563.979Z"
                fill="black"
                stroke="black"
                stroke-width="0.414126"
              />
              <path
                className="left-leg__hw"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1075.4 628.613L1001.72 739.262C1004.15 746.42 1033.21 747.702 1033.21 747.702L1096.08 670.868L1075.4 628.613Z"
                fill="black"
                stroke="black"
                stroke-width="0.414126"
              />
              <g id="table-hw">
                <path
                  id="path3511"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M793.503 535.538V770.691H812.077L822.079 535.538H793.503Z"
                  fill="#554400"
                  stroke="black"
                  stroke-width="0.282222"
                />
                <path
                  id="path3513"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1033.54 534.301V769.453H1052.12L1062.12 534.301H1033.54Z"
                  fill="#554400"
                  stroke="black"
                  stroke-width="0.282222"
                />
                <path
                  id="path3348"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M776.357 515.736V540.489H1104.98V515.736H776.357Z"
                  fill="#554400"
                  stroke="black"
                  stroke-width="0.282222"
                />
              </g>
              <g id="chair-hw">
                <path
                  id="path3522"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1136.44 634.568V646.908H1264.99V634.568H1136.44Z"
                  fill="#BE9D19"
                  stroke="black"
                  stroke-width="0.298852"
                />
                <path
                  id="path3524"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1250.72 634.55L1279.3 473.656H1293.58L1265.01 634.55H1250.72Z"
                  fill="#BE9D19"
                  stroke="black"
                  stroke-width="0.282222"
                />
                <path
                  id="path3526"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1137.66 646.769V762.185H1146.78L1151.69 646.769H1137.66Z"
                  fill="#BE9D19"
                  stroke="black"
                  stroke-width="0.138519"
                />
                <path
                  id="path3528"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1264.57 646.769V762.185H1255.45L1250.54 646.769H1264.57Z"
                  fill="#BE9D19"
                  stroke="black"
                  stroke-width="0.138519"
                />
              </g>
              <path
                className="left-arm__hw"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1212.47 418.757L1199.63 486.327L1041.65 443.78L1030.31 422.238L1142.81 444.404L1182.73 401.387L1212.47 418.757Z"
                fill="#CF3B3B"
              />
            </g>
            <path
              className="boy-head__hw"
              d="M1179.6 352C1179.6 372.769 1162.98 389.597 1142.5 389.597C1122.02 389.597 1105.4 372.769 1105.4 352C1105.4 331.231 1122.02 314.403 1142.5 314.403C1162.98 314.403 1179.6 331.231 1179.6 352Z"
              fill="#C4C4C4"
              stroke="black"
              stroke-width="0.805363"
            />
            <g className="sunglass__hw">
              <path
                id="Rectangle 1"
                d="M1102.83 336.976L1120.42 337.048L1120.02 350.422L1102.71 349.922L1102.83 336.976Z"
                fill="#342E2E"
              />
              <path
                id="Rectangle 2"
                d="M1128.14 337.329L1146.21 337.611L1145.5 351.013L1128.5 350.453L1128.14 337.329Z"
                fill="#252222"
              />
              <path
                id="Vector 1"
                d="M1116.32 345.182C1119.19 342.184 1126.02 338.119 1130.34 345.849"
                stroke="black"
                stroke-width="0.571477"
              />
            </g>
          </g>
          <path
            className="star-hw"
            d="M71 714L74.8167 726.092L87.168 726.092L77.1756 733.566L80.9923 745.658L71 738.184L61.0077 745.658L64.8244 733.566L54.832 726.092L67.1833 726.092L71 714Z"
            fill="#E0E262"
          />
          <path
            className="star-hw"
            d="M126 504L129.817 514.365H142.168L132.176 520.771L135.992 531.135L126 524.729L116.008 531.135L119.824 520.771L109.832 514.365H122.183L126 504Z"
            fill="#E0E262"
          />
          <path
            className="star-hw"
            d="M296 460L300.49 474.856H315.021L303.265 484.038L307.756 498.894L296 489.712L284.244 498.894L288.735 484.038L276.979 474.856H291.51L296 460Z"
            fill="#E0E262"
          />
          <path
            className="star-hw"
            d="M1276 54L1280.04 61.2553H1293.12L1282.54 65.7394L1286.58 72.9947L1276 68.5106L1265.42 72.9947L1269.46 65.7394L1258.88 61.2553H1271.96L1276 54Z"
            fill="#E0E262"
          />
          <path
            className="star-hw"
            d="M125 57L129.041 70.3705H142.119L131.539 78.634L135.58 92.0045L125 83.741L114.42 92.0045L118.461 78.634L107.881 70.3705H120.959L125 57Z"
            fill="#E0E262"
          />
          <path
            className="star-hw"
            d="M532 75L536.49 89.8561H551.021L539.265 99.0377L543.756 113.894L532 104.712L520.244 113.894L524.735 99.0377L512.979 89.8561H527.51L532 75Z"
            fill="#E0E262"
          />
          <path
            className="star-hw"
            d="M591.5 162L595.204 174.256H607.192L597.494 181.831L601.198 194.087L591.5 186.513L581.802 194.087L585.506 181.831L575.808 174.256H587.796L591.5 162Z"
            fill="#E0E262"
          />
          <path
            className="star-hw"
            d="M782.884 64L786.225 75.0557H797.039L788.291 81.8885L791.632 92.9443L782.884 86.1115L774.135 92.9443L777.477 81.8885L768.728 75.0557H779.542L782.884 64Z"
            fill="#E0E262"
          />
          <g className="sun__hw">
            <path
              className="sun-body__hw"
              d="M409 504L419.369 541.67L441.47 509.391L438.985 548.37L470.421 524.981L455.351 561.045L492.717 549.079L466.694 578.32L505.94 579.074L471.785 598.324L508.658 611.717L470.072 618.888L500.577 643.469L461.741 637.785L482.572 670.89L447.695 652.967L456.595 691.008L429.456 662.789L425.459 701.643L409 666.185L392.541 701.643L388.544 662.789L361.405 691.008L370.305 652.967L335.428 670.89L356.259 637.785L317.423 643.469L347.928 618.888L309.342 611.717L346.215 598.324L312.06 579.074L351.306 578.32L325.283 549.079L362.649 561.045L347.579 524.981L379.015 548.37L376.53 509.391L398.631 541.67L409 504Z"
              fill="#FCEE21"
            />
            <path
              id="Vector 2"
              d="M378 622C389.333 634.667 417.2 652.4 438 622"
              stroke="black"
            />
            <ellipse
              id="Ellipse 1"
              cx="393"
              cy="596.5"
              rx="6"
              ry="7.5"
              fill="#373030"
            />
            <ellipse
              id="Ellipse 2"
              cx="421"
              cy="596.5"
              rx="6"
              ry="7.5"
              fill="#221F1F"
            />
          </g>
          <path
            className="moon__hw"
            d="M229 176C81.5 150 34.5 399.5 259.5 370C137.5 358.935 155.636 205 229 176Z"
            fill="#F5EBEB"
            stroke="black"
          />
        </g>
      </svg>
      <div ref={paraRef} className="description--journey-five">
        <span className="para-five">
          Yes....I started to code like day and night. understand code, code
          understand ....Yah! Something like this....
        </span>
        {/* <span className="para-five">
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </span> */}
      </div>
      <div className="but-hw__container">
        <p className="but-hw">
          But I realized....Coding Sucks <i class="fas fa-tired"></i> !! And I
          broke up with it <i class="fas fa-angry"></i>.......
          <br />
          But also understood, the power of it will not come within one or two
          day or week or one two month. So I took my time to learn it and still
          learning....And I will learn, again learn, again learn....learn ,
          learn , learn...Because,not only for me but also for all ....
        </p>
      </div>
    </div>
  );
}

export default HWComponent;
