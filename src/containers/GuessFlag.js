import React, { Component } from "react";
import Button from "../components/Button";
import Flag from "../components/Flag";

class GuessTheTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomArrayOf3: [],
      randomElement: "",
      play: false,
      guess: "",
      flagsDisplay: [],
      guessEntered: false,
      buttonPlayValue: "",
      disabled: false,
    };
  }

  componentDidMount() {
    const { countries } = this.props;
    this.setState({
      randomArrayOf3: [
        countries[Math.floor(Math.random() * countries.length)],
        countries[Math.floor(Math.random() * countries.length)],
        countries[Math.floor(Math.random() * countries.length)],
      ],
      buttonPlayValue: `Guess the Flag`,
    });
  }

  handleClickPlay = (arrayOf3) => {
    if (!this.state.play) {
      this.setState({
        play: true,
        randomElement: arrayOf3[Math.floor(Math.random() * arrayOf3.length)],
        buttonPlayValue: `Close 'Guess the Flag'`,
      });
    } else {
      this.setState({
        play: false,
        buttonPlayValue: `Guess the Flag`,
      });
    }
  };

  newPick = (arrayOf3) => {
    this.setState({
      play: true,
      randomElement: arrayOf3[Math.floor(Math.random() * arrayOf3.length)],
      disabled: false,
    });
  };

  handleMouseClick = (answer) => {
    this.setState({ guess: answer });
    this.sendComponentScore(answer.flags.svg);
  };

  picturesDisplay = (array) => {
    const randomFlagArray = [];

    randomFlagArray[0] = array[Math.floor(Math.random() * array.length)];

    array.forEach((item) => {
      if (item !== randomFlagArray[0]) {
        randomFlagArray[1] = item;
      }
    });

    array.forEach((item) => {
      if (item !== randomFlagArray[0] && item !== randomFlagArray[1])
        randomFlagArray[2] = item;
    });

    this.setState({ flagsDisplay: randomFlagArray });
  };

  wrongAnswer = () => {
    this.setState({ guess: "", disabled: false });
  };

  playAgain = (countries) => {
    this.setState({
      randomArrayOf3: [
        countries[Math.floor(Math.random() * countries.length)],
        countries[Math.floor(Math.random() * countries.length)],
        countries[Math.floor(Math.random() * countries.length)],
      ],
      guess: "",
      disabled: false,
    });
  };

  sendComponentScore = (answer) => {
    console.log("flag co", answer, this.state.randomElement.flag);
    this.setState({ disabled: true });
    if (answer === this.state.randomElement.flags.svg) {
      this.props.addScore(true);
    } else {
      this.props.addScore(false);
    }
  };

  render() {
    const { countries } = this.props;
    const {
      randomElement,
      play,
      guess,
      randomArrayOf3,
      flagsDisplay,
      buttonPlayValue,
      disabled,
    } = this.state;
    console.log("random of array 3:", randomArrayOf3);

    return (
      <div className={"tc mv3"}>
        <Button
          bgColor={"#a8eb12"}
          text={buttonPlayValue}
          textSize={"f3"}
          width={"300px"}
          onClick={() => {
            this.handleClickPlay(randomArrayOf3);
            this.picturesDisplay(randomArrayOf3);
          }}
        />
        {/* <button 
                    className={'link dim br-pill ph3 pv3 mb2 dib shadow-3'}
                    style={{
                        fontSize: '1.5em', 
                        borderStyle: 'none', 
                        backgroundColor: '#a8eb12',
                        width: '300px'
                        }}
                    onClick = {() => {this.handleClickPlay(randomArrayOf3); this.picturesDisplay(randomArrayOf3)}}>
                    {buttonPlayValue}
                </button> */}
        {play ? (
          <div>
            <h2 className={"f3 tc mv2"}>
              Flag of{" "}
              <span className={"underline"}>{randomElement.name.common}?</span>
            </h2>
            <div className={"pa3"}>
              <Flag
                randomCountry={flagsDisplay[0].flags.svg}
                onClick={() => this.handleMouseClick(flagsDisplay[0])}
                disabled={disabled}
              />
              <Flag
                randomCountry={flagsDisplay[1].flags.svg}
                onClick={() => this.handleMouseClick(flagsDisplay[1])}
                disabled={disabled}
              />
              <Flag
                randomCountry={flagsDisplay[2].flags.svg}
                onClick={() => this.handleMouseClick(flagsDisplay[2])}
                disabled={disabled}
              />
              <div>
                <Button
                  bgColor={"#008793"}
                  color={"white"}
                  text={`Don't know. Reload`}
                  textSize={"f5"}
                  onClick={() => {
                    this.playAgain(countries);
                    this.newPick(randomArrayOf3);
                    this.picturesDisplay(randomArrayOf3);
                  }}
                />
              </div>
            </div>
            {guess ? (
              guess.flags.svg === randomElement.flags.svg ? (
                <div className={"flex justify-center flex-column"}>
                  <h2 className={"f3 b mv2"}>BRAVO! That's right!</h2>
                  <Button
                    bgColor={"#051937"}
                    text={`Play Again`}
                    color={"white"}
                    textSize={"f5"}
                    onClick={() => {
                      this.playAgain(countries);
                      this.newPick(randomArrayOf3);
                      this.picturesDisplay(randomArrayOf3);
                    }}
                  />
                </div>
              ) : (
                <div className={"flex justify-center flex-column"}>
                  <h2 className={"b f3 b mv2"}>
                    Keep trying! That's the flag of{" "}
                    <span className={"underline"}>{guess.name.common}!</span>
                  </h2>
                  <Button
                    bgColor={"#051937"}
                    text={`Try Again`}
                    color={"white"}
                    textSize={"f5"}
                    onClick={this.wrongAnswer}
                  />
                </div>
              )
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default GuessTheTopic;
