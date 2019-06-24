import React, { useEffect, useState } from "react";
// Without a backend we pull content straight from .json file.
import content from "../../content.json";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import Slider from "../../components/Slider/Slider";
import Paragraph from "../../components/Paragraph/Paragraph";
import Columns from "../../components/Columns/Columns.js";
import Signature from "../../components/Signature/Signature";
import Footer from "../../components/Footer/Footer";
import "./Landing.css";

const loadingStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

export default function Landing() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // We use jsonplaceholder to imitate an API.
    async function getContent() {
      setLoading(true);
      let response = await fetch("https://jsonplaceholder.typicode.com/photos");
      let json = await response.json();
      setLoading(false);
    }
    getContent();
  }, []);

  if (loading) {
    return (
      <img src="images/loading.gif" style={loadingStyle} alt="loading..." />
    );
  }

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
