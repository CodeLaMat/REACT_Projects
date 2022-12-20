import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./Form";
import View from "./View";
import NoteList from "./NoteList";
import Popup from "./Popup";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [note, setNote] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  });

  const eventHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const postHandler = (e) => {
    axios
      .post("http://localhost:3001/notes", note)
      .then((res) => console.log(res))
      .then(window.location.reload())
      .catch((error) => console.log(error));
  };

  const closeHandler = (e) => {
    setNote({
      ...note,
      firstname: "",
      lastname: "",
      phone: "",
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
        <Form change={eventHandler} submitHandler={submitHandler} {...note} />
        <View {...note} />

        <NoteList {...note} />
        {showPopup && (
          <Popup
            {...note}
            popupClose={closeHandler}
            postHandler={postHandler}
          />
        )}
      </div>
    </div>
  );
}
