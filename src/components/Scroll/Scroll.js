import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Scroll.css";

export default function Scroll({ height }) {
  const [visible, setVisible] = useState("visible");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setVisible("hidden");
    } else setVisible("visible");
  }

  return (
    <React.Fragment>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="landing" className="menu-item" href="/landing">
          Landing
        </a>
        <a id="bliss" className="menu-item" href="/bliss">
          Bliss
        </a>
      </Menu>
      <div className="scrollbar" style={{ height }}>
        <div className="scroll-text" style={{ visibility: visible }}>
          <p>PAINT YOUR PICTURE</p>
          <a
            href="#footer"
            target="_blank"
            title="To Footer"
            rel="noopener noreferrer"
          >
            <span class="glyphicon glyphicon-chevron-up" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
