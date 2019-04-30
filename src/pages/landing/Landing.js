import React, { useEffect, useState } from "react";
import content from "../../content.json";
import Scroll from "../../components/Scroll/Scroll";
import Intro from "../../components/Intro/Intro";
import "./Landing.css";

export default function Landing() {
  const [height, setHeight] = useState(
    Math.max(document.documentElement.clientHeight)
  );
  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeLanding);
    return () => window.removeEventListener("resize", resizeListener);
  });

  const resizeLanding = () =>
    setHeight(Math.max(document.documentElement.clientHeight));

  return (
    <div className="landing">
      <Scroll height={height} />
      <Intro image={content.intro.header[0]} height={height} />
      <h1>blah blah blah</h1>
    </div>
  );
}
