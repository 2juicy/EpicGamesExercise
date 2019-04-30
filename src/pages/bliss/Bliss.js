import React, { useState, useEffect } from "react";
import content from "../../content.json";
import Scroll from "../../components/Scroll/Scroll";

export default function Bliss() {
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
    <div className="bliss">
      {loading && (
        <img
          className="loading"
          src={process.env.PUBLIC_URL + "/images/loading.gif"}
          alt="loading..."
        />
      )}
      <Scroll height={height} />
      <h1>{content.intro.navText}</h1>
    </div>
  );
}
