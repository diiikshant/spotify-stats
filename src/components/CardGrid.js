import React, { useState } from "react";
import Card from "./Card";

const CardGrid = ({ accessToken }) => {
  const [artist, setArtist] = useState([]);
  fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => setArtist(data.items));

  return (
    <div>
      <h1 className="header-text">Your Most Played Artists</h1>
      <div className="cards">
        {artist.map((item, index) => (
          <Card key={index} artist={item} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
