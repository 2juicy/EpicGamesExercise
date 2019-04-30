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
        <div className="scroll-text" style={{ opacity }}>
          <p>PAINT YOUR PICTURE</p>
          <span
            class="glyphicon glyphicon-chevron-up"
            onClick={() =>
              document
                .getElementById("footer")
                .scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
}
