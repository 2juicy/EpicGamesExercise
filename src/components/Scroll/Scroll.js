import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Scroll.css";

export default function Scroll({ height }) {
  const [opacity, setOpacity] = useState(1);

  // Scroll waypoints to hide elements and animations. Could add more later
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 1) {
      setOpacity(0);
    } else setOpacity(1);
  }

  return (
    <React.Fragment>
      <Menu>
        <a id="home" className="menu-item" href="/">
          <span className="glyphicon glyphicon-home" /> Home
        </a>
        <a id="landing" className="menu-item" href="/landing">
          <span className="glyphicon glyphicon-road" /> Landing
        </a>
        <a id="bliss" className="menu-item" href="/subpage">
          <span className="glyphicon glyphicon-picture" /> Subpage
        </a>
      </Menu>
      <div className="scrollbar" style={{ height }}>
        <div className="scroll-text" style={{ opacity }}>
          <p
            onClick={() =>
              document
                .getElementById("footer")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            PAINT YOUR PICTURE
          </p>
          <span className="glyphicon glyphicon-chevron-up" />
        </div>
      </div>
    </React.Fragment>
  );
}
