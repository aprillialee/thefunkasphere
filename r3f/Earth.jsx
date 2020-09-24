function Earth() {
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial attach="material" color="pink" />
    </mesh>
  );
}

export default Earth;
