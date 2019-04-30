import React from "react";
import "./Slider.css";

export default function Slider(props) {
  return (
    <div className="slider-wheel">
      <h4>
        <span class="glyphicon glyphicon-menu-left" />
        <span class="glyphicon glyphicon-menu-right" />
        <span className="slider-title">{props.image.navText}</span>
      </h4>

      <div className="slider-items">
        <img
          className="slider-image"
          alt="Image1"
          src={`images/assets/${props.image.slides[0].image}`}
        />

        <img
          className="slider-image"
          alt="Image1"
          src={`images/assets/${props.image.logo}`}
        />
      </div>
    </div>
  );
}
