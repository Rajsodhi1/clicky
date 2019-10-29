import React, { Component } from "react";
import Cards from "./cards.json";
import Scoreboard from "./components/scoreboard";
import image from "./public/images";

const shuffle = array => {
  for (var i = array.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randIndex]] = [array[randIndex], array[i]]
  }
  return array;
}

//handleClick function that listens for a click on an image, sets key of clicked to true for that ID.
//if that image "clicked=true" alert lose reset game
//otherwise increase score by 1
//if score is > 11 alert win, reset game
//shuffle cards



render() {
  return (
    <div>
      <Scoreboard />
      <GameBox>
        {this.state.options.map(option => (
        <Cards 
          handleClick={this.handleClick}
          id={option.id}
          key={option.id}
          image={option.image}
          name={option.name}
        />
        ))}
      </GameBox>
    </div>
  );
};


export default App;
