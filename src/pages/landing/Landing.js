import React, { useEffect, useState } from "react";
import content from "../../content.json";
import Scroll from "../../components/Scroll/Scroll";
import Intro from "../../components/Intro/Intro";
import Slider from "../../components/Slider/Slider";
import "./Landing.css";

export default function Landing() {
  const [height, setHeight] = useState(
    Math.max(document.documentElement.clientHeight)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeLanding);
    return () => window.removeEventListener("resize", resizeListener);
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const resizeLanding = () =>
    setHeight(Math.max(document.documentElement.clientHeight));

  return (
    <div className="landing">
      {loading && (
        <img
          className="loading"
          src={process.env.PUBLIC_URL + "/images/loading.gif"}
          alt="loading..."
        />
      )}
      <Scroll height={height} />
      <Intro image={content.intro.header[0]} height={height} />
      <Slider image={content.slider1} />
    </div>
  );
}
