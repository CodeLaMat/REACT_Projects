import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./Form";
import View from "./View";
import NoteList from "./NoteList";
import Popup from "./Popup";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [notes, setNotes] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
  });

  const eventHandler = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const postHandler = (e) => {
    axios
      .post("http://localhost:3001/notes", notes)
      .then((res) => console.log(res))
      .then(window.location.reload())
      .catch((error) => console.log(error));
  };

  const closeHandler = (e) => {
    setNotes({
      ...notes,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="header">
        <h1>Form Task</h1>
      </div>
      <div className="App">
        <Form change={eventHandler} submitHandler={submitHandler} {...notes} />
        <View {...notes} />

        <NoteList {...notes} />
        {showPopup && (
          <Popup
            {...notes}
            popupClose={closeHandler}
            postHandler={postHandler}
          />
        )}
      </div>
    </div>
  );
}
