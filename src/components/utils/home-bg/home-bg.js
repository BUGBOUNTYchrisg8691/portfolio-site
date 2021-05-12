import React from "react";
import { Canvas } from "@react-three/fiber";

import Cubes from "./cubes";
import Environment from "./environment";
import Lights from "./lights";

import "./home-bg.less";

const HomeBG = () => {
  return (
    <div className="home-background-container">
      <Canvas>
        <Cubes />
        <Lights />
        <Environment />
      </Canvas>
    </div>
  );
};

export default HomeBG;
