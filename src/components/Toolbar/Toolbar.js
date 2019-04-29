import React from "react";
import "./style.css";

export default function Toolbar() {
  return (
    <header className="toolbar">
      <nav className="navigation">
        <div className="logo">
          <a href="/landing">Logo</a>
        </div>
        <div className="navitems">
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
          </ul>
        </div>

        <div className="scroll-text">PAINT YOUR PICTURE</div>
      </nav>
    </header>
  );
}
