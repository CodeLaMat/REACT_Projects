import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="birdContainer">
        <a href="/birds">
          <img
            className="homeImg"
            src={`https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80`}
            alt="bird"
          />
        </a>
        <div className="birdName">
          <h3>Birds</h3>
        </div>
      </div>
      <div className="animalContainer">
        <a href="/animals">
          <img
            className="homeImg"
            src={`https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80`}
            alt="animal"
          />
        </a>
        <div className="birdName">
          <h3>Animals</h3>
        </div>
      </div>
    </div>
  );
}
