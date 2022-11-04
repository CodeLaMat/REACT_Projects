import React, { Component } from "react";

import "./Main.css";
import Button from "./Button";

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  removeOneHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
    if (this.state.counter < 1) {
      return this.setState({ counter: 0 });
    }
  };

  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 });
  };

  removeFiveHandler = () => {
    this.setState({ counter: this.state.counter - 5 });
    if (this.state.counter < 4) {
      return this.setState({ counter: 0 });
    }
  };

  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  render() {
    let counterClass = "";
    if (this.setState.counter % 2 === 0) {
      counterClass = "counter1";
    }
    if (this.setState.counter % 2 !== 0) {
      counterClass = "counter2";
    }

    return (
      <main>
        <div className={counterClass}>
          <h1 className="counterNum">{this.state.counter}</h1>
        </div>
        <div className="buttons">
          {/* <button onClick={this.addFiveHandler}>Add five</button>
          <button onClick={this.addOneHandler}>Add one</button>
          <button onClick={this.resetHandler}>Reset</button>
          <button onClick={this.removeOneHandler}>Remove one</button>
          <button onClick={this.removeFiveHandler}>Remove five</button> */}
          <Button click={this.addFiveHandler}>Add five </Button>
          <Button click={this.addOneHandler} name={"Add One"}>
            Add One{" "}
          </Button>
          <Button click={this.resetHandler} name={"Reset"}>
            Reset{" "}
          </Button>
          <Button click={this.removeOneHandler} name={"Remove One"}>
            Remove One{" "}
          </Button>
          <Button click={this.removeFiveHandler} name={"Remove Five"}>
            Remove Five{" "}
          </Button>
        </div>
      </main>
    );
  }
}

export default Main;
