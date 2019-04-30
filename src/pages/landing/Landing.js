import React, { useEffect, useState } from "react";
import content from "../../content.json";
import Scroll from "../../components/Scroll/Scroll";
import Intro from "../../components/Intro/Intro";
import { slide as Menu } from "react-burger-menu";
import "./Landing.css";

export default function Landing() {
  const [height, setHeight] = useState(
    Math.max(document.documentElement.clientHeight)
  );
  useEffect(() => {
    const resizeListener = window.addEventListener(
      "resize",
      setHeight(Math.max(document.documentElement.clientHeight))
    );
    return () => window.removeEventListener("resize", resizeListener);
  });
  return (
    <div className="landing">
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/landing">
          Landing
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
      <Scroll height={height} />
      <Intro image={content.intro.header[0]} height={height} />
      <h1>blah blah blah</h1>
    </div>
  );
}
