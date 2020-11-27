import React, { useState, useEffect } from "react";
import "./MoodCard.css";
function Acousticness({ songs, accessToken }) {
  const [acousticness, setAcousticness] = useState([]);

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
            setAcousticness((acousticness) => [
              ...acousticness,
              data.acousticness,
            ])
          );
      });
    }
    getSongDetails(songs);
  }, []);

  function acousticnessCalc(arr) {
    let val = 0;
    arr.forEach((item) => {
      val += item;
    });
    return ((val / 20) * 100).toFixed(1);
  }

  const acousticnessPercentage = acousticnessCalc(acousticness);

  return (
    <div className="container-fluid">
      <div className="align-items-center row">
        <div className="mood-card acoustic col col-sm text-center">
          <h2 className="header">Acousticness</h2>
          <h1 className="main-value">{acousticnessPercentage}%</h1>
          <h2 className="explainer">
            Acousticness gives us a measure of whether a track is acoustic.
          </h2>
        </div>
        <div className="col col-sm">
          {acousticnessPercentage >= 50 ? (
            <p className="short-description text-justify">
              Fingers plucking strings. That's you jam (atleast for now).
              Perhaps you are Earth sign. Slow to anger, tolerating of other
              people, patient, and empathetic.
            </p>
          ) : (
            <p className="short-description">
              Low Valence means you like listening to songs that sound sad,
              depressing or angry. How are you doing?
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Acousticness;
