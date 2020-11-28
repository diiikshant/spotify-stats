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
        "https://api.spotify.com/v1/me/player/recently-played?limit=20",
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
      <h3>
        <i>Information is based on the last 20 songs you listened to</i>
      </h3>
      <hr />
      {songs.length !== 0 && (
        <div>
          <Danceability songs={songs} accessToken={accessToken} />
          <hr />
          <Valence songs={songs} accessToken={accessToken} />
          <hr />
          <Acousticness songs={songs} accessToken={accessToken} />
        </div>
      )}
      <hr />
    </div>
  );
}

export default Mood;
