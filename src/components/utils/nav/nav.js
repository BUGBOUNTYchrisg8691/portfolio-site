import React from "react";
import { useHistory } from "react-router-dom";
import { Menu /*, Switch*/ } from "antd";
import {
  HomeOutlined,
  SolutionOutlined,
  CodeOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./nav.less";

const { SubMenu } = Menu;

const THEME = "dark";

const SideNav = (props) => {
  const { push } = useHistory();
  const [current, setCurrent] = React.useState("0");
  // Possibly implement this at a later date
  // const [theme, setTheme] = React.useState("dark");

  const links = [
    {
      path: "/",
      op: function () {
        push(this.path);
      },
    },
    {
      path: "/about",
      op: function () {
        push(this.path);
      },
    },
    {
      path: "/projects",
      op: function () {
        push(this.path);
      },
    },
    {
      path: "/projects/1",
      op: function () {
        push(this.path);
      },
    },
    {
      path: "/projects/2",
      op: function () {
        push(this.path);
      },
    },
    {
      path: "/projects/3",
      op: function () {
        push(this.path);
      },
    },
    {
      path: "/projects/4",
      op: function () {
        push(this.path);
      },
    },
    {
      path: "/contact",
      op: function () {
        push(this.path);
      },
    },
  ];

  // Possibly implement this at a later date
  // const handleChangeTheme = (val) => {
  //   setTheme(val ? "dark" : "light");
  // };

  const handeMenuSelect = (e) => {
    links[e.key]["op"]();
  };

  const handleClick = (e) => {
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
        <Menu.Item key="0" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="1" icon={<SolutionOutlined />}>
          About
        </Menu.Item>
        <SubMenu key="sub1" icon={<CodeOutlined />} title="Projects">
          <Menu.Item key="2">All Projects</Menu.Item>
          <Menu.Item key="3">Project 1</Menu.Item>
          <Menu.Item key="4">Project 2</Menu.Item>
          <Menu.Item key="7">Project 3</Menu.Item>
          <Menu.Item key="6">Project 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<MailOutlined />}>
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
