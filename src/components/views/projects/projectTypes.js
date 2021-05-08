import React from "react";
import { useParams } from "react-router-dom";

import "./project-types.less";

const projects = {
  react: [
    {
      url: "https://reactjs.org/",
      gh: "https://github.com/facebook/react",
    },
  ],
  python: [
    {
      url: "https://www.python.org/",
      gh: "https://github.com/python",
    },
  ],
  angular: [
    {
      url: "https://angular.io",
      gh: "https://github.com/angular",
    },
  ],
  java: [
    {
      url: "https://www.java.com/en/",
      gh: "https://github.com/openjdk",
    },
  ],
};

const ProjectTypes = () => {
  const { type } = useParams();

  return (
    <div className="page-container">
      <pre>{JSON.stringify(type)}</pre>
      <pre>{type && JSON.stringify(projects[type])}</pre>
    </div>
  );
};

export default ProjectTypes;
