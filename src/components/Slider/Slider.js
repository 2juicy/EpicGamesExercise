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
        {props.image.slides.map(slide => (
          <div className="img-container">
            <div className="cut-image">
              <img
                className="slider-image"
                id={slide.id}
                alt={slide.title}
                src={`images/assets/${slide.image}`}
              />
            </div>
            <div className="slider-img-text">
              <span class="glyphicon glyphicon-heart" /> 382
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
