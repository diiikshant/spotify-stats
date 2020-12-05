import React, { useState, useEffect } from "react";
import Chart from "./Chart";
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
      <div className="row align-items-center">
        <div className="mood-card acoustic col col-sm text-center">
          <h2 className="header">Acousticness</h2>
          <h1 className="main-value">{acousticnessPercentage}%</h1>
          <h2 className="explainer">
            Acousticness gives us a measure of whether a track is acoustic.
          </h2>
        </div>
        <div className="col col-sm">
          <div className="ml-md-5 mt-4 mt-md-0">
            {acousticness.length == 20 && (
              <Chart
                levels={acousticness}
                color={"f2c94c"}
                border={"f2994a"}
                type={"acousticness"}
              />
            )}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-sm">
          {acousticnessPercentage >= 50 ? (
            <p className="short-description text-justify">
              Fingers plucking strings. That's your jam (atleast for now).
              Perhaps you are Earth sign. Slow to anger, tolerating of other
              people, patient, and empathetic.
            </p>
          ) : (
            <p className="short-description">
              Ahh. Not really interested in listening to Joe playing the guitar,
              are you? Understandable. Maybe you like more sounds and complexity
              in your music. Perhaps you are more imaginitive and creative.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Acousticness;
