import React from "react";
import "./Signature.css";

export default function Signature({ signature }) {
  return (
    <div
      style={{
        backgroundImage: `url(/images/assets/${signature.backgroundImage})`
      }}
      className="signature"
    >
      <div className="signature-text">
        <h4>{signature.subtitle}</h4>
        <h1>{signature.title}</h1>
        <p>{signature.text}</p>
      </div>
    </div>
  );
}
