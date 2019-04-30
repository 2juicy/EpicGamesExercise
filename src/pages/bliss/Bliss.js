import React, { useState, useEffect } from "react";
import content from "../../content.json";
import Scroll from "../../components/Scroll/Scroll";

export default function Bliss() {
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
      <h1>{content.intro.navText}</h1>
    </div>
  );
}
