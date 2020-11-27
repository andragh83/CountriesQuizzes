import React, { Component } from 'react';

class GuessTheTopic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomElement: '', 
            play: false,
            guess: '',
            guessEntered: false,
            buttonPlayValue: ''
        };
      }

      componentDidMount() {
        const { countries, topic } = this.props;
          this.setState({
              randomElement: countries[Math.floor(Math.random() * countries.length)],
              buttonPlayValue: `Play 'Guess the ${topic}'!`
            })
      }

      handleClickPlay = () => {
        const { topic } = this.props;
        if (!this.state.play) {
            this.setState({
                play: true,
                buttonPlayValue: `Close 'Guess the ${topic}'!`
            });
            
        } else {
            this.setState({
                play: false,
                buttonPlayValue: `Play 'Guess the ${topic}'!`
            })
            
        }
            
            
      }

      handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.setState ({guessEntered: true})
        }
      }

      handleOkButton = (event) => {
        this.setState ({guessEntered: true})
      }

      onGuessEntered = (event) => {
            this.setState ({guess: event.target.value})
            // console.log('keys', Object.keys(this.state.randomElement))
      }

      wrongGuess = () => {
        this.setState ({guessEntered: false, guess: ''})
      }

      newCountry = (array) => {
        this.setState ({
            guessEntered: false, guess: '',
            randomElement: array[Math.floor(Math.random() * array.length)],

        })
      }

    render() {
       const { countries, topic } = this.props;
       const { randomElement, play, guess, guessEntered, buttonPlayValue } = this.state;
        
       console.log('guess', guess, 'randomElement GuessTopic', randomElement[topic])

        return(
            <div className={"tc pa2"}>
                <button 
                    className={'f6 link dim br3 ph3 pv3 mb2 dib white'}
                    style={{
                        fontSize: '1.5em', 
                        borderStyle: 'none', 
                        backgroundColor: 'rgb(0, 94, 102)',
                        width: '300px'
                        }}
                    onClick = {this.handleClickPlay}>
                    {buttonPlayValue}
                </button>
                {
                    play? 
                    <div>
                        <div className={'flex justify-center'}>
                            <h2><span style={{textTransform: 'capitalize'}}>{topic}</span> of <span style={{borderBottom: '3px solid black'}}>{randomElement.name}</span>?</h2>
                        </div>
                        <input 
                            className={"ba tc br3 pa3 w-25"}
                            type="text" 
                            placeholder="Write your answer here" 
                            onChange = {this.onGuessEntered}
                            onKeyDown = {this.handleKeyDown}
                            value = {guess}
                            />
                        <button 
                            className={'ba tc br3 pa3 navy bg-light-green'}
                            style={{
                                borderStyle: 'none', 
                                marginLeft: '1em'
                                }}
                            onClick = {() => this.handleOkButton()}
                            >
                        OK
                        </button>
                        
                        <button 
                            className={'ba tc br3 pa3 white bg-navy'}
                            style={{
                                borderStyle: 'none', 
                                marginLeft: '1em'
                                }}
                            onClick = {() => this.newCountry(countries)}
                            >
                        Try another country
                        </button>
                        
                        {
                            guessEntered?
                                (guess.toLowerCase()===randomElement[topic].toLowerCase()?
                                    <div style={{color: 'green', fontSize: '2em', paddingTop: '0.8em'}}>
                                        BRAVO! That's right! 
                                        <button 
                                            className={'ba tc br3 pa3 white bg-dark-green'}
                                            style={{
                                                borderStyle: 'none', 
                                                marginLeft: '1em',
                            
                                                }}
                                            onClick = {() => this.newCountry(countries)}
                                            >
                                            Play again
                                        </button>   
                                    </div>
                                    :
                                    <div>
                                        <p style={{color: 'red', fontSize: '2em', margin: '1em'}}>
                                            Wrong! 
                                        </p> 
                                        
                                        <button 
                                            className={'ba tc br3 pa3 white bg-navy'}
                                            style={{
                                                borderStyle: 'none', 
                                                marginLeft: '1em'
                                                }}
                                            onClick = {this.wrongGuess}
                                        >
                                            Try again with the same country! 
                                        </button>
                                        
                                    </div>)
                                : <div> </div>
                        }
                    </div> 
                    :
                    <div></div>
                }
             
            </div>
        )
        }
    
}

export default GuessTheTopic;