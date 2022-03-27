import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./toslowslide.component.css";

function SlowScroll() {
  useEffect(() => {
    const legs = document.querySelectorAll(".leg__scroll--arrow");
    gsap.to(legs, { opacity: 0.4, stagger: 0.4, ease: "ease", repeat: -1 });
  }, []);
  return (
    <div className="scroll__slowly--container">
      <p className="scroll__text">Scroll Down Slowly</p>
      <svg
        id="slow__scroll--arrow"
        width="1440"
        height="900"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="leg_4" className="leg__scroll--arrow">
          <path
            id="Vector 1"
            d="M375 152.5C473.167 150 669.5 182.8 669.5 334"
            stroke="#ddd"
            stroke-width="15"
          />
          <path
            id="Vector 2"
            d="M964 152.129C865.833 149.629 669.5 182.429 669.5 333.629"
            stroke="#ddd"
            stroke-width="15"
          />
        </g>
        <g id="leg_3" className="leg__scroll--arrow">
          <path
            id="Vector 1_2"
            d="M375 334.5C473.167 332 669.5 364.8 669.5 516"
            stroke="#ddd"
            stroke-width="15"
          />
          <path
            id="Vector 2_2"
            d="M964 334.129C865.833 331.629 669.5 364.429 669.5 515.629"
            stroke="#ddd"
            stroke-width="15"
          />
        </g>
        <g id="leg_2" className="leg__scroll--arrow">
          <path
            id="Vector 1_3"
            d="M375 536.5C473.167 534 669.5 566.8 669.5 718"
            stroke="#ddd"
            stroke-width="15"
          />
          <path
            id="Vector 2_3"
            d="M964 536.129C865.833 533.629 669.5 566.429 669.5 717.629"
            stroke="#ddd"
            stroke-width="15"
          />
        </g>
        <g id="leg_1" className="leg__scroll--arrow">
          <path
            id="Vector 1_4"
            d="M375 718.5C473.167 716 669.5 748.8 669.5 900"
            stroke="#ddd"
            stroke-width="15"
          />
          <path
            id="Vector 2_4"
            d="M964 718.129C865.833 715.629 669.5 748.429 669.5 899.629"
            stroke="#ddd"
            stroke-width="15"
          />
        </g>
      </svg>
    </div>
  );
}

export default SlowScroll;
