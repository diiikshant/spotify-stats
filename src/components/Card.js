import React from "react";

function Card({ artist, rank }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={artist.images[0].url} className="card-img"></img>
          <h1>
            {rank + 1}. {artist.name}
          </h1>
        </div>
        <div className="card-back">
          {artist.genres.slice(0, 3).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <iframe
            src={`https://open.spotify.com/follow/1/?uri=${artist.uri}&size=basic&theme=light`}
            width="200"
            height="25"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Card;
