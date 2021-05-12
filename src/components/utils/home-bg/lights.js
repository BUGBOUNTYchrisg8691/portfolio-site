import React from "react";

const Lights = () => {
  const Sphere = () => (
    <mesh>
      <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      <meshBasicMaterial color={0xfff1ef} attach="material" />
    </mesh>
  );

  return (
    <group>
      <Sphere />
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
};

export default Lights;
