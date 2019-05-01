import React from "react";
import "./Articles.css";

export default function Articles({ columns }) {
  return (
    <div className="wrapper">
      <div className="sidebar-section">
        <p className="sideways">
          <span>29TH</span>JANUARY 2019
        </p>
      </div>
      <div className="articles">
        {columns.map(column => (
          <div key={column.id}>
            <h3>{column.title}</h3>
            <p>{column.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
