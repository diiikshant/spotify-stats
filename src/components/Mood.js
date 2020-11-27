import React, { useState, useEffect } from "react";
import axios from "axios";
import Danceability from "./Danceability";
import Valence from "./Valence";
import Acousticness from "./Acousticness";
import "./Mood.css";

function Mood({ accessToken }) {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://api.spotify.com/v1/me/player/recently-played?limit=10",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      setSongs(result.data.items);
    };
    fetchItems();
  }, []);

  return (
    <div className="mood-container">
      <h1>What does your listening activity tell about you?</h1>
      {songs.length !== 0 && (
        <div>
          <Danceability songs={songs} accessToken={accessToken} />
          <Valence songs={songs} accessToken={accessToken} />
          <Acousticness songs={songs} accessToken={accessToken} />
        </div>
      )}
      <hr />
    </div>
  );
}

export default Mood;
