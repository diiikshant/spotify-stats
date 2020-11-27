import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import "./MoodCard.css";
function Danceability({ songs, accessToken }) {
  const [danceability, setDanceability] = useState([]);

  useEffect(() => {
    function getSongDetails(list) {
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
    getSongDetails(songs);
  }, []);

  function danceCalc(arr) {
    let val = 0;
    arr.forEach((item) => {
      val += item;
    });
    return ((val / 20) * 100).toFixed(1);
  }

  const dancePercentage = danceCalc(danceability);

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="mood-card dance col col-sm text-center">
          <h2 className="header">Danceability</h2>
          <h1 className="main-value">{dancePercentage}%</h1>
          <h2 className="explainer">
            Danceability describes how suitable a track is for dancing
          </h2>
        </div>
        <div className="col col-sm">
          {danceability.length == 10 && <Chart levels={danceability} />}
        </div>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col col-sm">
          {dancePercentage >= 50 ? (
            <p className="short-description text-justify">
              You like listening to upbeat music you can dance to. Bustling
              clubs or your home, as soon as the song starts your feet start
              tapping and before you know it you are dancing like there is no
              tomorrow. Either that or you just like to dance in your head and
              like imagining things... a lot.
            </p>
          ) : (
            <p className="short-description">
              Ahh... not really got the moves do you? It's okay, I can't dance
              either. So let's just keep the dancing to your heads{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Danceability;
