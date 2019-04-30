import React from "react";
import "./Footer.css";

function Footer({ footer, copyright }) {
  return (
    <React.Fragment>
      <div id="footer">
        <ul className="aboutme">
          <h4>{footer[0].id}</h4>
          <li>{footer[0].text[0].description}</li>
        </ul>
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
      <p id="copyright">{copyright}</p>
    </React.Fragment>
  );
}

export default Footer;
