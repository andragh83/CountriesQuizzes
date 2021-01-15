import React, { useState ,useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import GuessTheTopic from '../components/GuessTheTopic';
import GuessFlag from '../components/GuessFlag'

import github from "../img/github.svg"; 
import fb from "../img/fb.png"; 
import insta from "../img/insta.png"; 
import twitter from "../img/twitter.png"; 

import './App.css';

import { setSearchedCountry, setPlay, setShowCards, requestCountries } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchedCountry: state.searchCountries.searchedCountry,
    play: state.searchCountries.play,
    playButton: state.searchCountries.playButton,
    showCards: state.searchCountries.showCards,
    showCardsButton: state.searchCountries.showCardsButton,
    
    countries: state.requestCountries.countries,
    isPending: state.requestCountries.isPending,
    error: state.requestCountries.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onValueEntered: (event) => dispatch(setSearchedCountry(event.target.value)),
    handlePlayButton: () => {dispatch(setPlay())},
    handleShowCards: () => {dispatch(setShowCards())},
    onRequestCountries: () => dispatch(requestCountries())
  }
}

function App(props) {
  const { countries,
          searchedCountry, 
          play, 
          playButton,
          showCards,
          showCardsButton,
          onValueEntered, 
          handlePlayButton, 
          handleShowCards,
        } = props;

  // const [countries, setCountries] = useState([]);
  // const [searchedCountry, setSearchedCountry] = useState('');
  // const [play, setPlay] = useState(false);
  // const [playButton, setPlayButton] = useState('PLAY');
  // const [showCards, setShowCards] = useState(false);
  // const [showCardsButton, setShowCardsButton] = useState('SHOW COUNTRIES');
  const [generalScore, setGeneralScore] = useState(0);

  useEffect(() => {
    // console.log(props.store.getState());
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(response => response.json())
    // .then(result => setCountries(result))
    props.onRequestCountries()   
  }, [])

  // const onValueEntered = (event) => {
  //   setSearchedCountry(event.target.value);
  // }

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
      setGeneralScore(generalScore + 1)
    }
  }
  
  // const handleShowCards = () => {
  //   if (!showCards) {
  //     setShowCards(true);
  //     setShowCardsButton('HIDE COUNTRIES');
  //   } else {
  //     setShowCards(false);
  //     setShowCardsButton('SHOW COUNTRIES');
  //   }
    
  // }

  
    const filteredCountries = countries.filter(country => {
              return country.name.toLowerCase().includes(searchedCountry.toLowerCase())
            })    

    return (
      <div className={"tc"}>
        <h1 className={"tc"}>Know your Countries</h1>
        <h2>Your score: {generalScore}</h2>
        <button 
            className={'f1 b br3 ph4 pv3 mv3 dib shadow-3 bg-light-green grow'}            
            onClick = {handlePlayButton}>
           {playButton}
        </button>
        {
          play?
          <div>
                <GuessTheTopic 
                  countries= {countries} 
                  topic={Object.keys(countries[0])[5]}    
                  addScore={updateScore}              
                  />              
                <GuessTheTopic 
                  countries={countries} 
                  topic={Object.keys(countries[0])[7]} 
                  addScore={updateScore}                    
                  /> 
                <GuessFlag 
                  countries={countries} 
                  addScore={updateScore}                      
                />              
                <div>
                    <button
                    className={'f2 b link grow br3 ph4 pv3 mv2 dib shadow-3 bg-light-green'}                    
                    onClick={handleShowCards}
                    >
                      {showCardsButton}
                    </button>
                    {
                      showCards? 
                      <div>
                          <SearchField onValueEntered={onValueEntered} value = {searchedCountry} />
                          <div className={'flex justify-center flex-wrap'}>
                            <CardList countries={filteredCountries}/>
                          </div>
                      </div>
                      :
                      <div></div>
                    }
                </div>                
          </div>
          :
          <div></div>
        }
                
        <footer>
          <div className={'flex justify-center items-end mt4'}>
            <div className={'ph2'}>
                <a href="https://www.github.com/andragh83/" target="_blank" rel="noopener noreferrer"><img height="30px" src={github} alt="github" style={{margin: "10px auto"}}/></a>
            </div>
            <div className={'ph2'}>
                <a href="https://www.facebook.com/andraghstudio/" target="_blank" rel="noopener noreferrer"><img height="30px" src={fb} alt="facebook" style={{margin: "10px auto"}}/></a>
            </div>
            <div className={'ph2'}>
                <a href="https://twitter.com/andraghitulescu" target="_blank" rel="noopener noreferrer"><img height="30px" src={twitter} alt="facebook" style={{margin: "10px auto"}}/></a>
            </div>
            <div className={'ph2'}>
                <a href="https://www.instagram.com/andragh83/" target="_blank" rel="noopener noreferrer"><img height="30px" src={insta} alt="instagram" style={{margin: "10px auto"}}/></a>
            </div>
            </div>
        </footer> 

      </div>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
