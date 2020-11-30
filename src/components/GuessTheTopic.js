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
              buttonPlayValue: `Guess the ${topic}`
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
                buttonPlayValue: `'Guess the ${topic}`
            })
            
        }
            
            
      }

      handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.setState ({guessEntered: true, guess: ''})
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
                    className={'f3 b link dim br3 ph3 pv3 mb2 dib white shadow-3'}
                    style={{
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
                        <div className={'flex justify-center flex-column'}>
                            <h2 className={'f3 tc mt2 mb3'}><span className={'ttc'}>{topic}</span> of <span className={'underline'}>{randomElement.name}</span>?</h2>
                        </div>
                        <input 
                            className={"ba tc br3 pa3"}
                            style={{width: '300px'}}
                            type="text" 
                            placeholder="Write your answer here" 
                            onChange = {this.onGuessEntered}
                            onKeyDown = {this.handleKeyDown}
                            value = {guess}
                            />
                        <button 
                            className={'b tc ml2 br3 pa3 bg-light-green shadow-3 self-center'}
                            style={{
                                borderStyle: 'none',                                
                                width: '50px'
                                }}
                            onClick = {() => this.handleOkButton()}
                            >
                        OK
                        </button>
                        
                        {/* <button 
                            className={'ba tc br3 pa3 white bg-navy self-center'}
                            style={{
                                borderStyle: 'none', 
                                marginLeft: '1em',
                                marginRight: '1em',
                                marginTop: '1em',
                                width: '250px'
                                }}
                            onClick = {() => this.newCountry(countries)}
                            >
                        Try another country
                        </button> */}
                        
                        {
                            guessEntered?
                                (guess.toLowerCase()===randomElement[topic].toLowerCase()?
                                    <div className={'flex justify-center flex-column'}>
                                        <h2 className={'green mt3 mb2'}>BRAVO! That's right!</h2>  
                                        <button 
                                            className={'b ba br3 shadow-3 tc mv3 pa3 white bg-navy self-center'}                                            
                                            onClick = {() => this.newCountry(countries)}
                                            >
                                            Play again
                                        </button>   
                                    </div>
                                    :
                                    <div className={'flex justify-center flex-column'}> 
                                            <h2 className={'red mt3 mb2'}>Wrong!</h2>
                                            <h3 className={'mt1 mb3'}>The {topic} of {randomElement.name} is {randomElement[topic]}!</h3>
                                            <button 
                                            className={'b a br3 shadow-3 tc mv3 pa3 white bg-navy self-center'}                                            
                                            onClick = {() => this.newCountry(countries)}
                                            >
                                            Play again!
                                        </button>   
                                        {/* <button 
                                            className={'ba tc br3 pa3 white bg-light-red self-center'}
                                            style={{
                                                borderStyle: 'none', 
                                                marginLeft: '1em',
                                                width: '250px'
                                                }}
                                            onClick = {this.wrongGuess}
                                        >
                                            Try again with the same country! 
                                        </button> */}
                                        
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