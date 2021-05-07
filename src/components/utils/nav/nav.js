import React from "react";
import { useHistory /*, useParams*/ } from "react-router-dom";
import { Menu /*, Switch*/ } from "antd";

// icons
import {
  HomeOutlined,
  SolutionOutlined,
  CodeOutlined,
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faPython,
  faAngular,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

import "./nav.less";

const { SubMenu } = Menu;

const THEME = "dark";

const SideNav = props => {
  const { push } = useHistory();
  // const { type } = useParams();
  const [current, setCurrent] = React.useState("home");

  // Possibly implement this at a later date
  // const [theme, setTheme] = React.useState("dark");

  const links = {
    home: {
      path: "/",
      op: function () {
        push(this.path);
      },
    },
    about: {
      path: "/about",
      op: function () {
        push(this.path);
      },
    },
    allProjects: {
      path: "/projects",
      op: function () {
        push(this.path);
      },
    },
    react: {
      path: "/projects/react",
      op: function () {
        push(this.path);
      },
    },
    python: {
      path: "/projects/python",
      op: function () {
        push(this.path);
      },
    },
    nextjs: {
      path: "/projects/angular",
      op: function () {
        push(this.path);
      },
    },
    java: {
      path: "/projects/java",
      op: function () {
        push(this.path);
      },
    },
    contact: {
      path: "/contact",
      op: function () {
        push(this.path);
      },
    },
  };

  // Possibly implement this at a later date
  // const handleChangeTheme = (val) => {
  //   setTheme(val ? "dark" : "light");
  // };

  const handeMenuSelect = e => {
    links[e.key]["op"]();
  };

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <div className="nav-container">
      <Menu
        theme={THEME}
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={[]}
        selectedKeys={[current]}
        mode="inline"
        onSelect={handeMenuSelect}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<SolutionOutlined />}>
          About
        </Menu.Item>
        <SubMenu key="sub1" icon={<CodeOutlined />} title="Projects">
          <Menu.Item key="allProjects" icon={<AppstoreOutlined />}>
            All Projects
          </Menu.Item>
          <Menu.Item key="react" icon={<FontAwesomeIcon icon={faReact} />}>
            React Projects
          </Menu.Item>
          <Menu.Item key="python" icon={<FontAwesomeIcon icon={faPython} />}>
            Python Projects
          </Menu.Item>
          <Menu.Item key="angular" icon={<FontAwesomeIcon icon={faAngular} />}>
            Angular Projects
          </Menu.Item>
          <Menu.Item key="java" icon={<FontAwesomeIcon icon={faJava} />}>
            Java Projects
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="contact" icon={<MailOutlined />}>
          Contact Me
        </Menu.Item>
      </Menu>
      {/* Possibly implement this at a later date */}
      {/* <Switch */}
      {/*   checked={theme === "dark"} */}
      {/*   onChange={handleChangeTheme} */}
      {/*   checkedChildren="Dark" */}
      {/*   unCheckedChildren="Light" */}
      {/* /> */}
    </div>
  );
};

export default SideNav;
