import React from "react";
import "./Footer.css";

function Footer({ footer, copyright }) {
  return (
    <React.Fragment>
      <div id="footer">
        <ul className="li-no-style aboutme">
          <li>
            <h4>{footer[0].id}</h4>
          </li>
          <li>{footer[0].text[0].description}</li>
        </ul>
        <ul className="li-no-style">
          <li>
            <h4>{footer[1].id}</h4>
          </li>
          {footer[1].text.map(text => (
            <React.Fragment key={text.id}>
              <li>{text.description}</li>
              <br />
            </React.Fragment>
          ))}
        </ul>
        <ul className="li-no-style">
          <li>
            <h4>{footer[2].id}</h4>
          </li>
          {footer[2].text.map(text => (
            <React.Fragment key={text.id}>
              <li>{text.description}</li>
              <br />
            </React.Fragment>
          ))}
        </ul>
      </div>
      <p id="copyright">
        <span className="glyphicon glyphicon-copyright-mark" />
        {" " + copyright}
      </p>
    </React.Fragment>
  );
}

export default Footer;
