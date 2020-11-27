import React from "react";
import "./MoodCard.css";
function MoodCard({ dance }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="mood-card col col-sm text-center">
          <h2 className="header">Danceability</h2>
          <h1 className="main-value">{dance}%</h1>
          <h2 className="explainer">
            Danceability describes how suitable a track is for dancing
          </h2>
        </div>
        <div className="col col-sm">
          {dance >= 50 ? (
            <p className="short-description text-justify">
              You like listening to upbeat music you can dance to. Bustling
              clubs or your home, as soon as the song starts your feet start
              tapping and before you know it you are dancing like there is no
              tomorrow. Either that or you just like to dance in your head and
              like imagining things... a lot.
            </p>
          ) : (
            <p className="short-description">you dont</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodCard;
