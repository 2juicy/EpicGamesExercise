import React from "react";
import "./Footer.css";

function Footer({ footer }) {
  console.log(footer);
  return (
    <div id="footer">
      <ul>
        <h4>{footer[1].id}</h4>
        {footer[1].text.map(text => (
          <React.Fragment>
            <li id={text.id}>{text.description}</li>
            <br />
          </React.Fragment>
        ))}
      </ul>
      <ul>
        <h4>{footer[2].id}</h4>
        {footer[2].text.map(text => (
          <React.Fragment>
            <li id={text.id}>{text.description}</li>
            <br />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
