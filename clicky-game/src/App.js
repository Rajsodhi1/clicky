import React, { Component } from "react";
import imageCards from "./components";
import Scoreboard from "./components/scoreboard";
import image from "./public/images";

const shuffle = array => {
  for (var i = array.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randIndex]] = [array[randIndex], array[i]]
  }
  return array;
}


class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    showAlert: 0,
    showWins: 0,
    clickedImages: []
  };
  handleScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  clickedImage = id => {
    let clickedImages = this.state.clickedImages;
    let score = this.state.score;
    let highScore = this.state.highScore;
    this.setState({
      showAlert: 0
    });
    if (clickedImages.indexOf(id) === -1) {
      clickedImages.push(id);
      console.log(clickedImages);
      this.handleScore();
      this.shuffleCards();
    } else if (this.state.score === 10) {
      this.setState({
        showWins: 1,
        score: 0,
        clickedImages : []
      });
    } else {
      this.setState({
        score: 0,
        clickedImages: []
      });
      this.setState({
        showAlert: 1
      });
    };
    if (score > highScore) {
      this.setState({
        highScore: score
      });
    };
  }

  shuffleCards = () => {
    this.setState({
      images: shuffle(images)
    });
  };

render() {
  return (
    <div>
      <Scoreboard />
      <GameBox>
        {this.state.options.map(option => (
        <imageCards 
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

}
export default App;
