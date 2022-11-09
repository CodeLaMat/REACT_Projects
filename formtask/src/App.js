import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    note: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      message: "",
    },

    showPopup: false,
  };

  eventHandler = (event) => {
    this.setState({
      note: { ...this.state.note, [event.target.name]: event.target.value },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = (e) => {
    // window.location.reload();
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      message: "",
      showPopup: false,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>Form Task</h1>
        </div>
        <div className="App">
          <Form
            change={this.eventHandler}
            submitHandler={this.submitHandler}
            {...this.state.note}
          />
          <View {...this.state.note} />
          {this.state.showPopup && (
            <Popup
              firstName={this.state.note.firstName}
              lastName={this.state.note.lastName}
              phoneNumber={this.state.note.phoneNumber}
              role={this.state.note.role}
              message={this.state.note.message}
              popupClose={this.closeHandler}
            />
          )}
        </div>
      </div>
    );
  }
}
export default App;
