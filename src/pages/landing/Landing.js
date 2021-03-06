import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import Slider from "../../components/Slider/Slider";
import Paragraph from "../../components/Paragraph/Paragraph";
import Columns from "../../components/Columns/Columns.js";
import Signature from "../../components/Signature/Signature";
import Footer from "../../components/Footer/Footer";
import "./Landing.css";

export default function Landing({ content }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing page">
      <Navbar />
      <Intro image={content.intro.header[0]} />
      <Slider image={content.slider1} />
      <Paragraph paragraph={content.slider1} />
      <Slider image={content.slider2} />
      <Columns columns={content.slider2.columns} />
      <Signature signature={content.signature[0]} />
      <Footer
        footer={content.footer.options}
        copyright={content.footer.copyright}
      />
    </div>
  );
}
