import React, { useEffect, useState } from "react";
import content from "../../content.json";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import Slider from "../../components/Slider/Slider";
import Paragraph from "../../components/Paragraph/Paragraph";
import Columns from "../../components/Columns/Columns.js";
import Signature from "../../components/Signature/Signature";
import Footer from "../../components/Footer/Footer";
import "./Landing.css";

export default function Landing() {
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
    <div className="landing page">
      <Navbar height={height} />
      <Intro image={content.intro.header[0]} height={height} />
      <Slider image={content.slider1} />
      <Paragraph paragraph={content.slider1} />
      <Slider image={content.slider2} />
      <Columns columns={content.slider2.columns} />
      <Signature signature={content.signature[0]} height={height} />
      <Footer
        footer={content.footer.options}
        copyright={content.footer.copyright}
      />
    </div>
  );
}
