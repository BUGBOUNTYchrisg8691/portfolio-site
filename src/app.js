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

// assets
import headerBanner from "./assets/headerBanner2.jpg";

// styles
import "./app.less";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = React.useState(true);

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
            <Header
              className="site-layout-header"
              style={{
                padding: 0,
                width: "100%",
                height: "15vh",
                background: "none",
                backgroundImage: `url(${headerBanner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="site-layout-header-overlay"></div>
            </Header>
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
