import React from "react";

function Card({ artist }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={artist.images[0].url} className="card-img"></img>
          <h1>{artist.name}</h1>
        </div>
        <div className="card-back">
          {artist.genres.slice(0, 3).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
