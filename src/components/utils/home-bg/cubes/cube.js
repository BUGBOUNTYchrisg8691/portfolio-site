import React from "react";
import { useFrame } from "@react-three/fiber";

const random = (lower = 0, upper = 1, floating = true) => {
  if (floating) {
    return Math.random() * (upper - lower + 1) + lower;
  } else {
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
  }
};

const Cube = () => {
  const mesh = React.useRef();
  const time = React.useRef(0);

  const [isActive] = React.useState(false);

  const isActiveRef = React.useRef(isActive);

  const position = React.useMemo(() => {
    return [random(-4, 4), random(-4, 4), random(-4, 4)];
  }, []);

  const timeMod = React.useMemo(() => random(0.1, 4), []);

  const color = 0x1da57a;

  React.useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useFrame(() => {
    mesh.current.rotation.y += 0.01 * timeMod;
    if (isActiveRef.current) {
      time.current += 0.03;
      mesh.current.position.y = position[1] + Math.sin(time.current) * 0.4;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxBufferGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
};

export default Cube;
