import React, { Component } from "react";
import Button from "../components/Button";

class GuessTheTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomElement: "",
      play: false,
      guess: "",
      guessEntered: false,
      buttonPlayValue: "",
      readOnly: false,
      disabled: false,
      giveUp: false,
    };
  }

  componentDidMount() {
    const { countries, topic } = this.props;
    this.setState({
      randomElement: countries[Math.floor(Math.random() * countries.length)],
      buttonPlayValue: `Guess the ${topic}`,
    });
  }

  handleClickPlay = () => {
    const { topic } = this.props;
    if (!this.state.play) {
      this.setState({
        play: true,
        buttonPlayValue: `Close 'Guess the ${topic}'`,
      });
    } else {
      this.setState({
        play: false,
        buttonPlayValue: `Guess the ${topic}`,
      });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      this.setState({ guessEntered: true, readOnly: true, disabled: true });
      this.sendComponentScore();
    }
  };

  handleOkButton = (event) => {
    this.setState({ guessEntered: true, readOnly: true, disabled: true });
    this.sendComponentScore();
  };

  onGuessEntered = (event) => {
    this.setState({ guess: event.target.value });
    // console.log('keys', Object.keys(this.state.randomElement))
  };

  wrongGuess = () => {
    this.setState({
      guessEntered: false,
      guess: "",
      disabled: false,
      readOnly: false,
    });
  };

  handleGiveUp = () => {
    if (this.state.giveUp) {
      this.setState({ giveUp: false });
    } else {
      this.setState({ giveUp: true });
    }
  };

  newCountry = (array) => {
    this.setState({
      guessEntered: false,
      guess: "",
      readOnly: false,
      disabled: false,
      randomElement: array[Math.floor(Math.random() * array.length)],
    });
  };

  sendComponentScore = () => {
    const { topic } = this.props;
    console.log("topic", topic);
    console.log(
      "this.state.guess.toLowerCase()",
      this.state.guess.toLowerCase()
    );
    console.log(
      "this.state.randomElement[this.props.topic].toLowerCase()",
      this.state.randomElement[this.props.topic].toLowerCase()
    );
    if (
      (topic === "capital" &&
        this.state.guess.toLowerCase() ===
          this.state.randomElement[this.props.topic][0].toLowerCase()) ||
      (topic === "region" &&
        this.state.guess.toLowerCase() ===
          this.state.randomElement[this.props.topic].toLowerCase())
    ) {
      this.props.addScore(true);
    } else {
      this.props.addScore(false);
    }
  };

  render() {
    const { countries, topic } = this.props;
    const {
      randomElement,
      play,
      guess,
      guessEntered,
      buttonPlayValue,
      readOnly,
      disabled,
      giveUp,
    } = this.state;

    console.log("random Element", randomElement);
    return (
      <div className={"tc mv3"}>
        <Button
          bgColor={"#a8eb12"}
          text={buttonPlayValue}
          textSize={"f3"}
          width={"300px"}
          onClick={this.handleClickPlay}
        />
        {play ? (
          <div>
            <div className={"flex justify-center flex-column"}>
              <h2 className={"f3 tc mt2 mb3"}>
                <span className={"ttc"}>{topic}</span> of{" "}
                <span className={"underline"}>{randomElement.name.common}</span>
                ?
              </h2>
            </div>
            <input
              className={"ba tc br-pill pa3"}
              style={{ width: "300px", textTransform: "capitalize" }}
              type="text"
              placeholder="Write your answer here"
              onChange={this.onGuessEntered}
              onKeyDown={this.handleKeyDown}
              value={guess}
              readOnly={readOnly}
              disabled={disabled}
            />
            <Button
              bgColor={"#00bf72"}
              text={`OK`}
              color={"white mh2"}
              textSize={"f5 b"}
              onClick={() => this.handleOkButton()}
            />
            <Button
              bgColor={"#008793"}
              text={`Change country`}
              color={"white"}
              textSize={"f5 b"}
              onClick={() => this.newCountry(countries)}
            />
            {guessEntered ? (
              (topic === "capital" &&
                this.state.guess.toLowerCase() ===
                  this.state.randomElement[
                    this.props.topic
                  ][0].toLowerCase()) ||
              (topic === "region" &&
                this.state.guess.toLowerCase() ===
                  this.state.randomElement[this.props.topic].toLowerCase()) ? (
                <div className={"flex justify-center flex-column"}>
                  <h2 className={"b mt3 mb2"}>BRAVO! That's right!</h2>
                  <Button
                    bgColor={"#051937"}
                    text={`Play again!`}
                    color={"white"}
                    textSize={"b f5"}
                    onClick={() => this.newCountry(countries)}
                  />
                </div>
              ) : (
                <div>
                  <div className={"flex justify-center"}>
                    <Button
                      bgColor={"#04c3d1"}
                      text={`Try again!`}
                      color={"white"}
                      textSize={"b f5"}
                      onClick={this.wrongGuess}
                    />
                    <Button
                      bgColor={"#0298a3"}
                      text={`Give Up`}
                      color={"white ml2"}
                      textSize={"f5 b"}
                      onClick={this.handleGiveUp}
                    />
                  </div>
                  {giveUp ? (
                    <div className={"flex justify-center flex-column"}>
                      <h3 className={"b mt2 mb3"}>
                        The {topic} of {randomElement.name.common} is{" "}
                        {randomElement[topic]}!
                      </h3>
                      <Button
                        bgColor={"#051937"}
                        text={`Play again!`}
                        color={"white"}
                        textSize={"f5"}
                        onClick={() => this.newCountry(countries)}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )
            ) : (
              <div> </div>
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
