import React, { useState, useEffect } from "react";

import Chart from "./Chart";
import "./MoodCard.css";
function Valence({ songs, accessToken }) {
  const [valence, setValence] = useState([]);

  useEffect(() => {
    function getSongDetails(list) {
      list.forEach((item) => {
        fetch(`https://api.spotify.com/v1/audio-features/${item.track.id}`, {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
          .then((response) => response.json())
          .then((data) => setValence((valence) => [...valence, data.valence]));
      });
    }
    getSongDetails(songs);
  }, []);

  function valenceCalc(arr) {
    let val = 0;
    arr.forEach((item) => {
      val += item;
    });
    return ((val / 20) * 100).toFixed(1);
  }

  const valencePercentage = valenceCalc(valence);

  return (
    <div className="container-fluid">
      <div className="row align-items-center ">
        <div className="mood-card valence col col-sm text-center">
          <h2 className="header">Valence</h2>
          <h1 className="main-value">{valencePercentage}%</h1>
          <h2 className="explainer">
            Valence describes the musical positiveness conveyed by a track.
          </h2>
        </div>
        <div className="col col-sm">
          <div className="ml-md-5 mt-4 mt-md-0">
            {valence.length == 20 && (
              <Chart
                levels={valence}
                color={"a044ff"}
                border={"6a3093"}
                type={"valence"}
              />
            )}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-sm">
            {valencePercentage >= 50 ? (
              <p className="short-description text-justify">
                You have been listening to happy, cheerful and/or euphoric songs
                lately. Thinking of old times or just having a great day? Either
                way don't forget to smile and enjoy.
              </p>
            ) : (
              <p className="short-description text-justify">
                Low Valence means you like listening to songs that sound sad,
                depressing or angry. Maybe you had a bad day or just like
                listening to sad songs in general. Research does show that
                listening to sad songs can help people feel better.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valence;
