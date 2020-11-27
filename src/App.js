import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchField from './components/SearchField';
import GuessTheTopic from './components/GuessTheTopic';
import GuessFlag from './components/GuessFlag'

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
        showCardsButton: 'See all countries'
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
  
  handleSelectedTopic = (selected, countries) => {
    this.setState({
      selectedTopic: selected
    })
  }
  
  handleShowCards = () => {
    if (!this.state.showCards) {
      this.setState({showCards: true, showCardsButton: 'Hide countries'})
    } else {
      this.setState({showCards: false, showCardsButton: 'See all countries'})
    }
    
  }

  render() {
    const { countries, searchedCountry, play, playButton, showCards, showCardsButton } = this.state;
    // console.log('state:', this.state.countries)
    const filteredCountries = countries.filter(country => {
              return country.name.toLowerCase().includes(searchedCountry.toLowerCase())
            }
            )
    console.log('countries', countries[0])
    return (
      <div className={"tc"}>
        <h1 className={"tc"}>Know your Countries</h1>
        <button 
            className={'pa3 ph4 mb3 br3 navy bg-light-green'}
            style={{fontSize: '3em', borderStyle: 'none'}} 
            onClick = {this.handlePlayButton}>
            {playButton}
        </button>
        {
          play?
          <div>
                <GuessTheTopic 
                  countries= {countries} 
                  topic={Object.keys(countries[0])[5]}
                  
                  />
              
                <GuessTheTopic 
                  countries={countries} 
                  topic={Object.keys(countries[0])[7]}
                  
                  /> 

                <GuessFlag 
                  countries={countries} 
                  
                />
              
                <div>
                    <button
                    className={'tc f6 link dim br3 ph4 pv3 mb2 dib white bg-light-red'}
                    style={{fontSize: '2em', borderStyle: 'none'}}
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
        
        
        
      </div>
    );
  }
}

export default App;
