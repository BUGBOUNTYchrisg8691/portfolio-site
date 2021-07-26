import React from "react";
import { Layout, Anchor } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  RedditOutlined,
} from "@ant-design/icons";

import "./footer.less";

const { Footer } = Layout;
const { Link } = Anchor;

const socialMediaAccts = [
  {
    service: "GitHub",
    linkAddr: "https://github.com/bugbountychrisg8691",
    icon: GithubOutlined,
  },
  {
    service: "LinkedIn",
    linkAddr: "https://www.linkedin.com/in/christopher-girvin/",
    icon: LinkedinOutlined,
  },
  {
    service: "Twitter",
    linkAddr: "https://twitter.com/chrisg8691",
    icon: TwitterOutlined,
  },
  {
    service: "Instagram",
    linkAddr: "https://www.instagram.com/chrisg8691/",
    icon: InstagramOutlined,
  },
  {
    service: "Reddit",
    linkAddr: "https://www.reddit.com/user/bugbuountychrisg8691",
    icon: RedditOutlined,
  },
];

const CustomFooter = () => {
  return (
    <div className="footer-container">
      <Footer style={{ textAlign: "center" }}>
        <div className="footer">
          <p>
            Created by <b>Christopher Girvin</b>
          </p>
          <Anchor affix={false}>
            {socialMediaAccts.map((item, idx) => (
              <Link
                key={idx + "footer-anchor-links"}
                className="footer-anchor-links"
                href={item.linkAddr}
                title={<item.icon style={{ fontSize: "1.2rem" }} />}
                target="_blank"
              />
            ))}
          </Anchor>
        </div>
      </Footer>
    </div>
  );
};

export default CustomFooter;
