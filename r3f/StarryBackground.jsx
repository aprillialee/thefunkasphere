import { Canvas } from "react-three-fiber";

function StarryBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <mesh>
        <sphereGeometry attach="geometry" args={[0.5, 10, 10]} />
        <meshBasicMaterial attach="material" color="pink" />
      </mesh>
    </Canvas>
  );
}

export default StarryBackground;
