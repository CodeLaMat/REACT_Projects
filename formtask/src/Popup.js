import React from "react";

const Popup = (props) => {
  return (
    <div className="modal">
      <div>
        <h2 className="modalHeader">Here is your input:</h2>
      </div>
      <div className="viewContent modalContent">
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
      <div className="modalButtons">
        <button className="accept button>" onClick={props.popupClose}>
          You accept
        </button>
        <button className="reject button" onClick={props.popupClose}>
          Reject
        </button>
      </div>
    </div>
  );
};
export default Popup;
