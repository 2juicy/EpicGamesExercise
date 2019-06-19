import React, { useEffect } from "react";
import content from "../../content.json";
import Navbar from "../../components/Navbar/Navbar";
import Article from "../../components/Article/Article";
import Signature from "../../components/Signature/Signature";
import Footer from "../../components/Footer/Footer";

export default function Subpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [height, setHeight] = useState(
  //   Math.max(document.documentElement.clientHeight)
  // );

  // useEffect(() => {
  //   const resizeListener = window.addEventListener("resize", resizeLanding);
  //   return () => window.removeEventListener("resize", resizeListener);
  // });

  // const resizeLanding = () =>
  //   setHeight(Math.max(document.documentElement.clientHeight));

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
