import React from "react";

const View = ({ firstname, lastname, phone, role, message }) => {
  return (
    <div className="view">
      <div>
        <h2>Here is your input:</h2>
      </div>
      <div className="viewContent">
        <div className="inputView">
          <h3>First name:</h3>
          <span className="text">{firstname}</span>
        </div>
        <div className="inputView">
          <h3>Last name:</h3>
          <span className="text">{lastname}</span>
        </div>
        <div className="inputView">
          <h3>Phone number:</h3>
          <span className="text">{phone}</span>
        </div>
        <div className="inputView">
          <h3>Role:</h3>
          <span className="text">{role}</span>
        </div>
        <div className="inputView">
          <h3>Your message:</h3>
          <span className="text">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default View;
