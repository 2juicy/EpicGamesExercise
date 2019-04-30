import React from "react";
import PropTypes from "prop-types";
import "./Scroll.css";

export default function Scroll({ height }) {
  return (
    <div className="scrollbar" style={{ height }}>
      <div className="scroll-text">
        <p>PAINT YOUR PICTURE</p>
        <span class="glyphicon glyphicon-chevron-up" />
      </div>
    </div>
  );
}

Scroll.propTypes = {
  handleClick: PropTypes.number.isRequired
};
