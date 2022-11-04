import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <main>
        <div className="counter">
          <h1>{this.state.counter}</h1>
        </div>
        <div>
          <button onClick={this.addOneHandler}> Add One</button>
          <button> Add Five</button>
          <button> Reset</button>
          <button> Remove One</button>
          <button> Remove Five</button>
        </div>
      </main>
    );
  }
}
export default Main;
