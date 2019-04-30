import React from "react";
import "./Footer.css";

function Footer({ footer }) {
  console.log(footer);
  return (
    <div id="footer">
      <ul>
        <h4>{footer[1].id}</h4>
        {footer[1].text.map(text => (
          <li id={text.id}>{text.description}</li>
        ))}
      </ul>
      <ul>
        <h4>{footer[2].id}</h4>
        {footer[2].text.map(text => (
          <li id={text.id}>{text.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
