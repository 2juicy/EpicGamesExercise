import React, { useEffect, useState } from "react";
import content from "../../content.json";
import Scroll from "../../components/Scroll/Scroll";
import Intro from "../../components/Intro/Intro";
import Slider from "../../components/Slider/Slider";
import Paragraph from "../../components/Paragraph/Paragraph";
import Footer from "../../components/Footer/Footer";
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
      <Slider image={content.slider1} />
      <Paragraph paragraph={content.slider1} />
      <Slider image={content.slider2} />
      <Footer
        footer={content.footer.options}
        copyright={content.footer.copyright}
      />
    </div>
  );
}
