import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer">
      <footer className="row">
        <div className="text-center mx-auto col-12-xs col-md py-md-5 spotify-link">
          <a href="https://open.spotify.com/" target="_blank">
            <i className="fa fa-spotify icon" aria-hidden="true"></i> Open
            Spotify
          </a>
        </div>
        <div className="col py-md-5 mx-auto socials">
          <div className="row">
            <a
              className="col"
              target="_blank"
              href="https://www.linkedin.com/in/dikshantrawat/"
            >
              <i className="fa fa-linkedin-square icon" aria-hidden="true"></i>
            </a>
            <a
              className="col"
              target="_blank"
              href="https://www.behance.net/diiikshant"
            >
              <i
                className="fa fa-behance-square col icon"
                aria-hidden="true"
              ></i>
            </a>
            <a
              className="col"
              target="_blank"
              href="https://github.com/diiikshant"
            >
              <i
                className="fa fa-github-square col icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
