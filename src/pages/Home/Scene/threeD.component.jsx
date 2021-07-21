import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import Model from "./Scene.js";
import "./threeD.component.css";

const ThreeDElements = () => {
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
    </div>
  );
};

export default ThreeDElements;
