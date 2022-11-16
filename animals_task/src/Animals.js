import React, { Component } from "react";
import "./Animals.css";
import { animals } from "./AnimalList";

import Card from "./Card";

class App extends Component {
  state = {
    animals: animals,
    likes: 0,
    search: "",
  };

  removeHandler = (name) => {
    const newArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: newArray });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const newArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: newArray,
      };
    });
  };

  removeLikeHandler = (name) => {
    this.setState((state) => {
      const newArray = state.animals.map((animal) => {
        if (animal.name === name && animal.likes > 0) {
          return { ...animal, likes: animal.likes - 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: newArray,
      };
    });
  };

  searchHandler = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.search);
    });

    const animalsList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name[0].toUpperCase() + animal.name.slice(1)}
          like={animal.likes}
          removeCard={() => this.removeHandler(animal.name)}
          removeLike={() => this.removeLikeHandler(animal.name)}
          addLikes={() => this.addLikeHandler(animal.name)}
        />
      );
    });

    return (
      <div className="heading">
        <h1>Animals</h1>
        <h3>
          <span>We could find</span>{" "}
          <span className="numbers">{this.state.animals.length}</span>{" "}
          <span>animals for you</span>
        </h3>
        <input className="searchBox" onChange={this.searchHandler} />
        <div className="animalsList">{animalsList}</div>
      </div>
    );
  }
}

export default App;
