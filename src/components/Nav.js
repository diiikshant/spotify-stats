import React from "react";
import { Link } from "react-router-dom";

function Nav({ accessToken }) {
  const navStyle = {
    color: "black",
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to={`/?access_token=${accessToken}`}>
          <li>Most Played</li>
        </Link>
        <Link style={navStyle} to={`/mood/?access_token=${accessToken}`}>
          <li>Mood</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
