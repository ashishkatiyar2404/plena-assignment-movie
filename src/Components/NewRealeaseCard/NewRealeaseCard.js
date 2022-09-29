import React from "react";
import "./NewRealeaseCard.css";

const NewRealeaseCard = ({ movie }) => {
  const { title, vote_average, poster_path } = movie;
  return (
    <div className="realeaseCard">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <div className="movie__info">
        <p>{title}</p>
        <p>{vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default NewRealeaseCard;
