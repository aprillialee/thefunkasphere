import { useRef } from "react";
import { Canvas } from "react-three-fiber";

import { OrbitControls, Stars } from "drei";

function StarryBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom="false" />
      <Stars />
      <mesh>
        <sphereGeometry attach="geometry" args={[2, 32, 32]} />
        <meshBasicMaterial attach="material" color="pink" />
      </mesh>
    </Canvas>
  );
}

export default StarryBackground;
