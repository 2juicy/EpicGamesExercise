import React from "react";
import "./Intro.css";

export default function Intro(props) {
  return (
    <div
      style={{
        backgroundImage: `url(images/assets/${props.image.backgroundImage})`,
        height: props.height
      }}
      className="intro"
    >
      <img
        className="intro-logo"
        alt="Logo"
        src={`images/assets/${props.image.logo}`}
      />
      <div className="intro-text">
        <h3>{props.image.title}</h3>
        <p>{props.image.description.text}</p>
      </div>
      <div className="date">
        <p>April 20th 2016</p>
      </div>
    </div>
  );
}
