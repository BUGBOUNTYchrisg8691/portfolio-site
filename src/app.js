import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import {
  HomeView,
  AboutView,
  ProjectsView,
  ProjectTypesView,
  ContactView,
} from "./components/views";
import { Nav } from "./components/utils";

// styles
import "./app.less";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Route component={Nav} />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/about" component={AboutView} />
          <Route exact path="/projects" component={ProjectsView} />
          <Route path="/projects/:type" component={ProjectTypesView} />
          <Route path="/contact" component={ContactView} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
