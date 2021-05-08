import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// antd
import { Layout } from "antd";

// components
import {
  HomeView,
  AboutView,
  ProjectsView,
  ProjectTypesView,
  ContactView,
} from "./components/views";
import { SideNavUtil, FooterUtil } from "./components/utils";

// styles
import "./app.less";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const handleCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <div className="app-container">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
            <div className="logo" />
            <Route component={SideNavUtil} />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/about" component={AboutView} />
                <Route exact path="/projects" component={ProjectsView} />
                <Route path="/projects/:type" component={ProjectTypesView} />
                <Route path="/contact" component={ContactView} />
              </Switch>
            </Content>
            <FooterUtil />
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
