import React from "react";
import "./Paragraph.css";

export default function Paragraph({ paragraph }) {
  return (
    <div className="wrapper">
      <div className="paragraph-section">
        <p className="sideways">29thJANUARY 2019</p>
      </div>
      <div className="paragraphs">
        {/* if paragraphs were in an array, we can map it here */}
        <div className="paragraph">{paragraph.para2}</div>
        <br />
        <div className="paragraph">{paragraph.para1}</div>
        <br />
        <div className="paragraph">{paragraph.para2}</div>
      </div>
    </div>
  );
}
