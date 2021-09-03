import * as THREE from "three";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import Model from "./Scene.js";
import "./threeD.component.css";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ThreeDElements = () => {
  const [finished, setFinished] = useState(false);

  const history = useHistory();

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => setFinished(true);
  }, []);
  useEffect(() => {
    if (history.location.pathname === "/home") {
      setFinished(true);
    }
  }, [history.location.pathname]);
  const Loading = () => {
    return finished === false ? (
      <div className="loading">
        <img
          className="loading-img"
          src="https://i.ibb.co/X8j9kQL/SVKl.gif"
          alt="loading-spinner"
        />
        <h1 className="loading-header">loading 3d contents...</h1>
      </div>
    ) : null;
  };

  const props = useSpring({
    scale: [1, 1, 1],
  });
  return (
    <div className="three-d--elements">
      <Canvas colorManagement camera={{ position: [0, 0, 10], fov: 90 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scale={props.scale} />
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
      <Loading />
    </div>
  );
};

export default withRouter(ThreeDElements);
