import React, { useState, useEffect } from "react";
import content from "../../content.json";
import Scroll from "../../components/Scroll/Scroll";
import Article from "../../components/Article/Article";
import Signature from "../../components/Signature/Signature";
import Footer from "../../components/Footer/Footer";
import "./Bliss.css";

export default function Bliss() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="bliss">
      <Scroll height={height} />
      <Article height={height} />
      <Signature signature={content.signature[0]} height={height} />
      <Footer
        footer={content.footer.options}
        copyright={content.footer.copyright}
      />
    </div>
  );
}
