import React from "react";

function SongCard({ song, rank }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={song.album.images[0].url} className="card-img" />
          <h1>
            {rank + 1}. {song.name}
          </h1>
        </div>
        <div className="card-back">
          <iframe
            src={`https://open.spotify.com/embed/track/${song.id}`}
            width="80"
            height="80"
            frameBorder="0"
            allowtransparency="false"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
