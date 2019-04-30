import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Scroll.css";

export default function Scroll({ height }) {
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
        <div className="scroll-text">
          <p>PAINT YOUR PICTURE</p>
          <a href="#footer" class="glyphicon glyphicon-chevron-up" />
        </div>
      </div>
    </React.Fragment>
  );
}
