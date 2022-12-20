import React from "react";

const Popup = ({
  firstName,
  lastName,
  phoneNumber,
  role,
  message,
  popupClose,
  postHandler,
}) => {
  return (
    <div className="modal">
      <div>
        <h2 className="modalHeader">Here is your input:</h2>
      </div>
      <div className="viewContent modalContent">
        <div className="inputView">
          <h3>First name:</h3>
          <span className="text">{firstName}</span>
        </div>
        <div className="inputView">
          <h3>Last name:</h3>
          <span className="text">{lastName}</span>
        </div>
        <div className="inputView">
          <h3>Phone number:</h3>
          <span className="text">{phoneNumber}</span>
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
      <div className="modalButtons">
        <button onClick={postHandler} className="accept button>">
          You accept
        </button>
        <button className="reject button" onClick={popupClose}>
          Reject
        </button>
      </div>
    </div>
  );
};
export default Popup;
