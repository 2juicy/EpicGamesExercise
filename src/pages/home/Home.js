import React from "react";
import { Link } from "react-router-dom";
import "../../App.sass";

export default function Home() {
  //add a link to your page.
  const link = "/landing";
  return (
    <div>
      <div className="App-header text-center">
        <img
          src={process.env.PUBLIC_URL + "images/EGLogo.png"}
          className="App-logo"
          alt="logo"
        />
        <h2>Front End Web Developer Test</h2>
      </div>
      <div className="home-view container">
        <div className="row App-intro">
          <div className="col-md-6 col-md-offset-1">
            <h1>Implement Static Design</h1>
            <p className="App-intro">
              Create two new routes in this react app and implement the static
              designs below using html5, CSS and Javascript. It does not need to
              be pixel perfect but keep in mind this should be responsive. Think
              how you could improve the user experience.
            </p>
            <h4>Some Rules</h4>
            <ul>
              <li>
                The nav sticks to the left of the screen. When the user starts
                to scroll down the opacity fades only showing the hamburger.
                When the User scrolls up the opacity fades back in. Feel free to
                come up with a idea on how the menu comes into play when you
                click the hamburger icon.
              </li>
              <li>
                Come up with a transition between the home page and the subpage.
              </li>
              <li>
                Simulate a loading screen until the page content is loaded.
              </li>
            </ul>
            <h4>Some Tips</h4>
            <ul>
              <li>
                This does not Have to be <strong>pixel perfect</strong>, but
                needs to be responsive and work on standard browsers.
              </li>
              <li>
                Content is provided in the <code>content.json</code> file.
              </li>
              <li>
                Images are in <code>../images</code> directory.
              </li>
              <li>
                Keep in mind of web optimization, how content initially loads or
                scrolls in, and hover states.
              </li>
              <li>
                Feel Free to use plugins / packages from{" "}
                <a
                  href="https://www.npmjs.com/"
                  title="npmjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  npm
                </a>
                .
              </li>
            </ul>
            <Link className="btn btn-primary" to={link}>
              To Your Page
            </Link>
          </div>
          <div className="col-md-4 design">
            <a
              href={process.env.PUBLIC_URL + "images/Design.jpg"}
              target="_blank"
              title="See Full Image"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "images/Design.jpg"}
                alt="designToFollow"
                className="img-responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
