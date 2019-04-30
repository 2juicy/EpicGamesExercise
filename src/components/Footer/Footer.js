import React from "react";
import "./Footer.css";

function Footer({ footer }) {
  return (
    <div id="footer">
      <ul>
        <h4>{footer[1].id}</h4>
        {footer[1].text.map(text => (
          <React.Fragment key={text.id}>
            <li>{text.description}</li>
            <br />
          </React.Fragment>
        ))}
      </ul>
      <ul>
        <h4>{footer[2].id}</h4>
        {footer[2].text.map(text => (
          <React.Fragment key={text.id}>
            <li>{text.description}</li>
            <br />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
