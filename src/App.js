import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchField from './components/SearchField';
import GuessTheTopic from './components/GuessTheTopic';
import GuessFlag from './components/GuessFlag'

import github from "./img/github.svg"; 
import fb from "./img/fb.png"; 
import insta from "./img/insta.png"; 
import twitter from "./img/twitter.png"; 

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        countries: [],
        searchedCountry: '',
        play: false,
        playButton: 'PLAY',
        selectedTopic: false,
        showCards: false,
        showCardsButton: 'SHOW COUNTRIES',
        generalScore: 0
    };
  }

  componentDidMount() {    
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(result => this.setState({countries: result}))   
  }

  onValueEntered = (event) => {
    this.setState ({searchedCountry: event.target.value})
  }

  handlePlayButton = () => {
    if (this.state.play) {
      this.setState({play: false, playButton: 'PLAY'})
    } else {
      this.setState({play: true, playButton: 'CLOSE'})
      }    
  }
  
  updateScore = (componentScore) => {
    if (componentScore) {
      this.setState({
        generalScore: this.state.generalScore + 1
      })
    }
  }
  
  handleShowCards = () => {
    if (!this.state.showCards) {
      this.setState({showCards: true, showCardsButton: 'HIDE COUNTRIES'})
    } else {
      this.setState({showCards: false, showCardsButton: 'SHOW COUNTRIES'})
    }
    
  }

  render() {

    const { countries, searchedCountry, play, playButton, showCards, showCardsButton, generalScore } = this.state;
    const filteredCountries = countries.filter(country => {
              return country.name.toLowerCase().includes(searchedCountry.toLowerCase())
            })    

    return (
      <div className={"tc"}>
        <h1 className={"tc"}>Know your Countries</h1>
        <h2>Your score: {generalScore}</h2>
        <button 
            className={'f1 b br3 ph4 pv3 mv3 dib shadow-3 bg-light-green grow'}            
            onClick = {this.handlePlayButton}>
           {playButton}
        </button>
        {
          play?
          <div>
                <GuessTheTopic 
                  countries= {countries} 
                  topic={Object.keys(countries[0])[5]}    
                  addScore={this.updateScore}              
                  />              
                <GuessTheTopic 
                  countries={countries} 
                  topic={Object.keys(countries[0])[7]} 
                  addScore={this.updateScore}                    
                  /> 
                <GuessFlag 
                  countries={countries} 
                  addScore={this.updateScore}                      
                />              
                <div>
                    <button
                    className={'f2 b link grow br3 ph4 pv3 mv2 dib shadow-3 bg-light-green'}                    
                    onClick={this.handleShowCards}
                    >
                      {showCardsButton}
                    </button>
                    {
                      showCards? 
                      <div>
                          <SearchField onValueEntered={this.onValueEntered} value = {searchedCountry} />
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
}

export default App;
