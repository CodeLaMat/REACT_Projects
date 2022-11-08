import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <div>
        <h2>Here is your input:</h2>
      </div>
      <div className="viewContent">
        <div className="inputView">
          <h3>First name:</h3>
          <span className="text">{props.firstName}</span>
        </div>
        <div className="inputView">
          <h3>Last name:</h3>
          <span className="text">{props.lastName}</span>
        </div>
        <div className="inputView">
          <h3>Phone number:</h3>
          <span className="text">{props.phoneNumber}</span>
        </div>
        <div className="inputView">
          <h3>Role:</h3>
          <span className="text">{props.role}</span>
        </div>
        <div className="inputView">
          <h3>Your message:</h3>
          <span className="text">{props.message}</span>
        </div>
      </div>
    </div>
  );
};

export default View;
