import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchField from "../components/SearchField";
import GuessTheTopic from "./GuessTheTopic";
import GuessFlag from "./GuessFlag";
import Button from "../components/Button";

import github from "../img/github.svg";
import fb from "../img/fb.png";
import insta from "../img/insta.png";
import twitter from "../img/twitter.png";

import "./App.css";

import {
  setSearchedCountry,
  setPlay,
  setShowCards,
  requestCountries,
} from "../actions";
import FadeInWrapper from "../components/fadeInWrapper";
import BlinkWrapper from "../components/blinkWrapper";

const mapStateToProps = (state) => {
  return {
    searchedCountry: state.searchCountries.searchedCountry,
    play: state.searchCountries.play,
    playButton: state.searchCountries.playButton,
    showCards: state.searchCountries.showCards,
    showCardsButton: state.searchCountries.showCardsButton,
    countries: state.requestCountries.countries,
    error: state.requestCountries.error,
    isPending: state.requestCountries.isPending,
    error: state.requestCountries.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onValueEntered: (event) => dispatch(setSearchedCountry(event.target.value)),
    handlePlayButton: () => {
      dispatch(setPlay());
    },
    handleShowCards: () => {
      dispatch(setShowCards());
    },
    onRequestCountries: () => dispatch(requestCountries()),
  };
};

function App(props) {
  const {
    countries,
    searchedCountry,
    play,
    playButton,
    showCards,
    showCardsButton,
    onValueEntered,
    handlePlayButton,
    handleShowCards,
    error,
  } = props;

  // moving state into actions and reducer
  // const [countries, setCountries] = useState([]);
  // const [searchedCountry, setSearchedCountry] = useState('');
  // const [play, setPlay] = useState(false);
  // const [playButton, setPlayButton] = useState('PLAY');
  // const [showCards, setShowCards] = useState(false);
  // const [showCardsButton, setShowCardsButton] = useState('SHOW COUNTRIES');
  const [generalScore, setGeneralScore] = useState(0);

  useEffect(() => {
    // moving to actions and reducer
    // console.log(props.store.getState());
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(response => response.json())
    // .then(result => setCountries(result))
    props.onRequestCountries();
  }, []);

  // moving to actions and reducer
  // const onValueEntered = (event) => {
  //   setSearchedCountry(event.target.value);
  // }

  // moving to actions and reducer
  // const handlePlayButton = () => {
  //   if (play) {
  //     setPlay(false);
  //     setPlayButton('PLAY');
  //   } else {
  //     setPlay(true);
  //     setPlayButton('CLOSE');
  //     }
  // }

  const updateScore = (componentScore) => {
    if (componentScore) {
      setGeneralScore(generalScore + 1);
    }
  };

  // moving to actions and reducer
  // const handleShowCards = () => {
  //   if (!showCards) {
  //     setShowCards(true);
  //     setShowCardsButton('HIDE COUNTRIES');
  //   } else {
  //     setShowCards(false);
  //     setShowCardsButton('SHOW COUNTRIES');
  //   }

  // }

  const filteredCountries =
    countries && Array.isArray(countries)
      ? countries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchedCountry.toLowerCase());
        })
      : [];

  console.log("countries", countries);

  return (
    <div className={"tc"}>
      <h1 className={"tc"}>Countries Game</h1>
      <h2 className={"f2"}>Your score: {generalScore}</h2>

      {countries && !countries.message && countries[0] ? (
        <>
          <FadeInWrapper>
            <Button
              bgColor={"#051937"}
              color={"white"}
              text={playButton}
              textSize={"f2"}
              onClick={handlePlayButton}
            />
          </FadeInWrapper>

          {play ? (
            <div>
              <GuessTheTopic
                countries={countries}
                topic={Object.keys(countries[0])[11]}
                addScore={updateScore}
              />
              <GuessTheTopic
                countries={countries}
                topic={Object.keys(countries[0])[13]}
                addScore={updateScore}
              />
              <GuessFlag countries={countries} addScore={updateScore} />
              <div>
                <Button
                  bgColor={"#051937"}
                  color={"white"}
                  textSize={"f3"}
                  text={showCardsButton}
                  onClick={handleShowCards}
                />
                {showCards ? (
                  <div>
                    <SearchField
                      onValueEntered={onValueEntered}
                      value={searchedCountry}
                    />
                    <div className={"flex justify-center flex-wrap"}>
                      <CardList countries={countries && filteredCountries} />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </>
      ) : error || countries.message ? (
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          &#127758; We couldn't load game data, please try again later &#127758;
        </div>
      ) : (
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            fontSize: "20px",
          }}
        >
          Loading countries... <BlinkWrapper>&#127758;</BlinkWrapper>
        </div>
      )}

      <footer>
        <div className={"flex justify-center items-end mt4"}>
          <div className={"ph2"}>
            <a
              href="https://www.github.com/andragh83/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="30px"
                src={github}
                alt="github"
                style={{ margin: "10px auto" }}
              />
            </a>
          </div>
          <div className={"ph2"}>
            <a
              href="https://www.facebook.com/andraghstudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="30px"
                src={fb}
                alt="facebook"
                style={{ margin: "10px auto" }}
              />
            </a>
          </div>
          <div className={"ph2"}>
            <a
              href="https://twitter.com/andraghitulescu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="30px"
                src={twitter}
                alt="facebook"
                style={{ margin: "10px auto" }}
              />
            </a>
          </div>
          <div className={"ph2"}>
            <a
              href="https://www.instagram.com/andragh83/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                height="30px"
                src={insta}
                alt="instagram"
                style={{ margin: "10px auto" }}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
