import "./App.css";
import Circles from "./Circles";
import Modal from "./Modal";

import React, { Component } from "react";

class App extends Component {
  state = {
    score: 0,
    circles: [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }],
  };

  clickHandler = () => {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
  };

  render() {
    const circles = this.state.circles.map((circle) => {
      return (
        <div>
          <Circles key={circle.key} click={this.clickHandler} />
        </div>
      );
    });

    return (
      <div className="App">
        <h1>Speed Game</h1>
        <div className="scoreBoard">
          <h4 id="scoreIs">Your score is: {this.state.score}</h4>
        </div>
        <div className="circle-container">{circles}</div>
        <div className="buttons">
          <button type="button" className="startButton">
            Start game
          </button>
          <button type="button" className="stopButton">
            End game
          </button>
        </div>

        <Modal />
      </div>
    );
  }
}

export default App;
