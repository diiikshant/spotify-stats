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
    <div className="container-fluid cardHolder">
      <div className="row align-items-center">
        <div className="mood-card dance col col-sm text-center">
          <h2 className="header">Danceability</h2>
          <h1 className="main-value">{dancePercentage}%</h1>
          <h2 className="explainer">
            Danceability describes how suitable a track is for dancing
          </h2>
        </div>
        <div className="col col-sm">
          <div className="ml-md-5 mt-4 mt-md-0">
            {danceability.length == 20 && (
              <Chart
                levels={danceability}
                color={"ed213a"}
                border={"93291e"}
                type={"danceability"}
              />
            )}
          </div>
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
            <p className="short-description text-justify">
              Not really listening to upbeat music are you? If your valence is
              low then it would mean that you like listening to slow sad songs
              which indicates that you might not be having the best day.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Danceability;
