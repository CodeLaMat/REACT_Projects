import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
    showPopup: false,
  };

  eventHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: true });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>Form Task</h1>
        </div>
        <div className="App">
          <Form change={this.eventHandler} submitHandler={this.submitHandler} />
          <View
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            phoneNumber={this.state.phoneNumber}
            role={this.state.role}
            message={this.state.message}
          />
          {this.state.showPopup && (
            <Popup
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              phoneNumber={this.state.phoneNumber}
              role={this.state.role}
              message={this.state.message}
              popupClose={this.popupHandler}
            />
          )}
        </div>
      </div>
    );
  }
}
export default App;
