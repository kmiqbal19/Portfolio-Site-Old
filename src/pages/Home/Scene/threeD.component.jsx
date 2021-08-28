import * as THREE from "three";
import { useTransition } from "@react-spring/three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import Model from "./Scene.js";
import "./threeD.component.css";

const ThreeDElements = () => {
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => setFinished(true);
  }, []);
  const Loading = () => {
    return finished === false ? (
      <div className="loading">
        <img
          className="loading-img"
          src="https://i.ibb.co/X8j9kQL/SVKl.gif"
          alt="loading-spinner"
        />
        <h1 className="loading-header">Loading 3D Elements...</h1>
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

export default ThreeDElements;
