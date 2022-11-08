import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <div className="cardBox">
      <img
        src={`https://source.unsplash.com/300x200/?${props.name}`}
        alt={props.name}
      />
      <button className="remove" onClick={props.removeCard}>
        X
      </button>
      <h2 className="title">{props.name}</h2>
      <div className="likesContainer">
        <button className="removeLike" onClick={props.removeLike}>
          -
        </button>
        <p>
          <span className="heart">&hearts;</span> {props.like}
        </p>

        <button className="addLike" onClick={props.addLikes}>
          +
        </button>
      </div>
    </div>
  );
};
export default Card;
