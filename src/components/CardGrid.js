import React, { useState } from "react";
import Card from "./Card";

const CardGrid = ({ accessToken }) => {
  const [artist, setArtist] = useState([]);
  const [timeframe, setTimeframe] = useState("long_term");
  fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeframe}&limit=20&offset=0`,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => setArtist(data.items));

  console.log(timeframe);

  return (
    <div>
      <h1 className="header-text">Your Most Played Artists</h1>
      <div className="buttons">
        <button className="timeBtn" onClick={() => setTimeframe("long_term")}>
          All Time
        </button>
        <button className="timeBtn" onClick={() => setTimeframe("medium_term")}>
          6 Months
        </button>
        <button className="timeBtn" onClick={() => setTimeframe("short_term")}>
          4 Weeks
        </button>
      </div>
      <h1 className="background-text">SCROLL DOWN</h1>
      <div className="cards">
        {artist.map((item, index) => (
          <Card key={index} artist={item} rank={index} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
