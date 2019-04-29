import React from "react";

export default function Intro(props) {
  console.log(props.image.header[0].backgroundImage);
  return (
    <div
      className="intro"
      style={{
        position: "absolute",
        width: "100%",
        marginLeft: "5%",
        background: `url(images/assets/${
          props.image.header[0].backgroundImage
        })`
      }}
    >
      <img
        alt="Logo"
        src={`images/assets/${props.image.header[0].logo}`}
        style={{ display: "block", margin: "auto" }}
      />
      <h1>Intro component</h1>
    </div>
  );
}
