import React, { useState } from "react";
import SongCard from "./SongCard";

function MostPlayed({ accessToken }) {
  const [songs, setSongs] = useState([]);
  fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=0`,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => setSongs(data.items));

  return (
    <div className="most-played">
      <h1>Your Most Played Songs</h1>
      <div className="cards">
        {songs.length !== 0 &&
          songs.map((item, index) => (
            <SongCard key={index} song={item} rank={index} />
          ))}
      </div>
    </div>
  );
}

export default MostPlayed;
