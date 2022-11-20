import React, { Component } from "react";
import "./index.css";
import { birds } from "./AnimalList";

import Card from "./Card";

class Birds extends Component {
  state = {
    birds: birds,
    likes: 0,
    search: "",
  };

  removeHandler = (name) => {
    const newArray = this.state.birds.filter((bird) => bird.name !== name);
    this.setState({ birds: newArray });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const newArray = state.birds.map((bird) => {
        if (bird.name === name) {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return bird;
        }
      });
      return {
        birds: newArray,
      };
    });
  };

  removeLikeHandler = (name) => {
    this.setState((state) => {
      const newArray = state.birds.map((bird) => {
        if (bird.name === name && bird.likes > 0) {
          return { ...bird, likes: bird.likes - 1 };
        } else {
          return bird;
        }
      });
      return {
        birds: newArray,
      };
    });
  };

  searchHandler = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const birdFilter = this.state.birds.filter((bird) => {
      return bird.name.includes(this.state.search);
    });

    const birdsList = birdFilter.map((bird) => {
      return (
        <Card
          key={bird.name}
          name={bird.name[0].toUpperCase() + bird.name.slice(1)}
          like={bird.likes}
          removeCard={() => this.removeHandler(bird.name)}
          removeLike={() => this.removeLikeHandler(bird.name)}
          addLikes={() => this.addLikeHandler(bird.name)}
        />
      );
    });

    return (
      <div className="heading">
        <h1>Birds</h1>
        <h3>
          <span>We could find</span>{" "}
          <span className="numbers">{this.state.birds.length}</span>{" "}
          <span>birds for you</span>
        </h3>
        <input className="searchBox" onChange={this.searchHandler} />
        <div className="birdsList">{birdsList}</div>
      </div>
    );
  }
}

export default Birds;
