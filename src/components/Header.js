import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";

function Header({ accessToken }) {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState("");
  const [uri, setUri] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      setFlag(result.data.country.toLowerCase());
      setName(result.data.display_name);
      setUri(result.data.uri);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <div className="container-fluid page-header py-md-3">
        <header className="row justify-content-between">
          <div className="mx-auto col-12-xs col-md py-md-2">
            <img
              src={`https://flagcdn.com/16x12/${flag}.png`}
              srcSet={`https://flagcdn.com/32x24/${flag}.png 2x,
    https://flagcdn.com/48x36/${flag}.png 3x`}
              width="16"
              height="12"
              alt={`${flag}`}
            />
            <a href={uri} target="_blank">
              <h3 className="nameHead">{`Welcome, ${name}.`}</h3>
            </a>
          </div>
          <div className="col py-md-2 mx-auto secondary-text">
            <a href="https://developer.spotify.com/" target="_blank">
              <h3> Learn About SPOTIFY API</h3>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
