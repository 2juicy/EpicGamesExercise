import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Article from "../../components/Article/Article";
import Signature from "../../components/Signature/Signature";
import Footer from "../../components/Footer/Footer";

export default function Subpage({ content }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subpage page">
      <Navbar />
      <Article />
      <Signature signature={content.signature[0]} />
      <Footer
        footer={content.footer.options}
        copyright={content.footer.copyright}
      />
    </div>
  );
}
