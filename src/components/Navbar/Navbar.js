import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [pointerEvents, setPointerEvents] = useState("auto");

  // Scroll waypoints to hide elements
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 1) {
      setOpacity(0);
      setPointerEvents("none");
    } else if (window.pageYOffset <= 1) {
      setOpacity(1);
      setPointerEvents("auto");
    }
  }

  return (
    <React.Fragment>
      <Menu>
        <NavLink activeClassName="active" exact to="/">
          <span className="glyphicon glyphicon-home" /> Home
        </NavLink>
        <NavLink activeClassName="active" to="/landing">
          <span className="glyphicon glyphicon-road" /> Landing
        </NavLink>
        <NavLink activeClassName="active" to="/subpage">
          <span className="glyphicon glyphicon-picture" /> Subpage
        </NavLink>
      </Menu>
      <div className="navbar">
        <div className="scroll-text" style={{ opacity, pointerEvents }}>
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
