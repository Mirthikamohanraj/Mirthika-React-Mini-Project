import { useState } from "react";

function Card({ title, icon, color }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={`card ${color}`}>
      <div className="card-decoration"></div>

      <div className="icon-circle">
        <span>{icon}</span>
      </div>

      <h2>{title}</h2>

      <div className={`status ${liked ? "liked" : "not-liked"}`}>
        <span className="heart">
          {liked ? "♥" : "♡"}
        </span>

        {liked ? "Liked" : "Not Liked"}
      </div>

      <button
        className="like-button"
        onClick={handleLike}
      >
        <span>{liked ? "♥" : "♡"}</span>

        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default Card;