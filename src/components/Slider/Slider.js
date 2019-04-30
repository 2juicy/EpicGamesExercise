import React from "react";
import "./Slider.css";

export default function Slider(props) {
  return (
    <div className="slider-wrapper">
      <h4>
        <span class="glyphicon glyphicon-menu-left" />
        <span class="glyphicon glyphicon-menu-right" />
        <span className="slider-title">{props.image.navText}</span>
      </h4>

      <div className="sliders">
        {props.image.slides.map(slide => (
          <div className="slider">
            <div className="image-container">
              <div className="cut-image">
                <img
                  className="slider-image"
                  id={slide.id}
                  alt={slide.title}
                  src={`images/assets/${slide.image}`}
                />
                <div className="cut-img-text">❤︎ 382</div>
              </div>
            </div>
            <div className="slider-description">
              <h2>{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
