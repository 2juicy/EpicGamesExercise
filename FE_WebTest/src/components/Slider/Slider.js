import React from "react";
import "./Slider.css";

export default function Slider(props) {
  return (
    <div className="slider-wrapper">
      <h4>
        <span className="glyphicon glyphicon-menu-left" />
        <span className="glyphicon glyphicon-menu-right" />
        <span className="slider-title">{props.image.navText}</span>
      </h4>

      <div className="sliders">
        {props.image.slides.map(slide => (
          <div className="slider" key={slide.id}>
            <div className="cut-image">
              <img
                className="slider-image"
                alt={slide.title}
                src={process.env.PUBLIC_URL + `/images/assets/${slide.image}`}
              />
              <div className="cut-img-text">❤︎ 382</div>
            </div>

            <div className="slider-description">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <br />
            </div>
            <div className="bottom-content">
              <span className="glyphicon glyphicon-comment" />
              <span> 374 comments</span>
              <span className="glyphicon glyphicon-option-horizontal" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
