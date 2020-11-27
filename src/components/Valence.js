import React, { useState, useEffect } from "react";
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
      <div className="align-items-center row">
        <div className="col col-sm">
          {valencePercentage >= 50 ? (
            <p className="short-description text-justify">
              You have been listening to happy, cheerful and/or euphoric songs
              lately. Thinking of old times or just having a great day? Either
              way don't forget to smile and enjoy.
            </p>
          ) : (
            <p className="short-description">
              Low Valence means you like listening to songs that sound sad,
              depressing or angry. How are you doing?
            </p>
          )}
        </div>
        <div className="mood-card valence col col-sm text-center">
          <h2 className="header">Valence</h2>
          <h1 className="main-value">{valencePercentage}%</h1>
          <h2 className="explainer">
            Valence describes the musical positiveness conveyed by a track.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Valence;
