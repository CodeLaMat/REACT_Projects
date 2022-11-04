import React from "react";
import "./Card.css";

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
        <p> &hearts; {props.like}</p>

        <button className="addLike" onClick={props.addLikes}>
          Add like
        </button>
      </div>
    </div>
  );
};
export default Card;
