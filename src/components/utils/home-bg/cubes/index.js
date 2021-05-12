import React from "react";
import { useFrame } from "@react-three/fiber";

import Cube from "./cube";

const map = (arr, cb) => {
  return arr.map(cb);
};

const Cubes = () => {
  const group = React.useRef();

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  const nodesCubes = map(new Array(75).fill(0), (_, idx) => {
    return <Cube key={idx + "cube"} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};

export default Cubes;
