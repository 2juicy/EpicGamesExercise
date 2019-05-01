import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ height }) {
  const [opacity, setOpacity] = useState(1);

  // Scroll waypoints to hide elements
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 1) {
      setOpacity(0);
    } else if (window.pageYOffset <= 1) {
      setOpacity(1);
    }
  }

  return (
    <React.Fragment>
      <Menu>
        <Link activeClassName="active" exact to="/">
          <span className="glyphicon glyphicon-home" /> Home
        </Link>
        <Link activeClassName="active" to="/landing">
          <span className="glyphicon glyphicon-road" /> Landing
        </Link>
        <Link activeClassName="active" to="/subpage">
          <span className="glyphicon glyphicon-picture" /> Subpage
        </Link>
      </Menu>
      <div className="navbar" style={{ height }}>
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
