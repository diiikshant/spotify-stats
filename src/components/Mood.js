import React, { useState, useEffect } from "react";
import MoodCard from "./MoodCard";

function Mood({ accessToken }) {
  const [danceability, setDanceability] = useState([]);
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player/recently-played?limit=10", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => getSong(data.items));

    function getSong(list) {
      list.forEach((item) => {
        fetch(`https://api.spotify.com/v1/audio-features/${item.track.id}`, {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
          .then((response) => response.json())
          .then((data) =>
            setDanceability((danceability) => [
              ...danceability,
              data.danceability,
            ])
          );
      });
    }
  }, []);

  function danceCalc(arr) {
    let val = 0;
    arr.forEach((item) => {
      val += item;
    });
    return ((val / 10) * 100).toFixed(1);
  }

  const dancePercentage = danceCalc(danceability);
  return (
    <div>
      <MoodCard dance={dancePercentage} />
    </div>
  );
}

export default Mood;
