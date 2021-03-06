import React from "react";
import "./Intro.css";

export default function Intro(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/assets/${
          props.image.backgroundImage
        })`
      }}
      className="intro"
    >
      <img
        className="intro-logo"
        alt="Logo"
        src={process.env.PUBLIC_URL + `/images/assets/${props.image.logo}`}
      />
      <div className="intro-text">
        <h3>{props.image.title}</h3>
        <p>{props.image.description.text}</p>
      </div>
      <div className="date">
        <p>April 29th 2019</p>
      </div>
    </div>
  );
}
