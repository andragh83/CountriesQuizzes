import React, { Component } from 'react';

class GuessTheTopic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomElement: '', 
            play: false,
            guess: '',
            guessEntered: false,
            buttonPlayValue: '',
            readOnly: false,
            disabled: false,
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
                buttonPlayValue: `Close 'Guess the ${topic}'`
            });
            
        } else {
            this.setState({
                play: false,
                buttonPlayValue: `Guess the ${topic}`
            })            
          }                        
      }

      handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.setState ({guessEntered: true, readOnly: true, disabled: true});
            this.sendComponentScore(); 
        }
      }

      handleOkButton = (event) => {
        this.setState ({guessEntered: true, readOnly: true, disabled: true});
        this.sendComponentScore(); 
      }

      onGuessEntered = (event) => {
            this.setState ({guess: event.target.value});
            // console.log('keys', Object.keys(this.state.randomElement))
      }

      wrongGuess = () => {
        this.setState ({guessEntered: false, guess: ''})
      }

      newCountry = (array) => {
        this.setState ({
            guessEntered: false, 
            guess: '',
            readOnly: false,
            disabled: false,
            randomElement: array[Math.floor(Math.random() * array.length)],

        })
      }

      sendComponentScore = () => {
       if (this.state.guess.toLowerCase()===this.state.randomElement[this.props.topic].toLowerCase()){
                this.props.addScore(true);
            } else {
                this.props.addScore(false);
            }
      }

    render() {
       const { countries, topic } = this.props;
       const { 
           randomElement, 
           play, 
           guess, 
           guessEntered, 
           buttonPlayValue, 
           readOnly,
           disabled
        } = this.state;
        return(
            <div className={"tc mv3"}>
                <button 
                    className={'f3 link dim br-pill ph3 pv3 mb2 dib shadow-3'}
                    style={{
                        borderStyle: 'none', 
                        backgroundColor: '#a8eb12',
                        width: '300px',
                        
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
                            className={"ba tc br-pill pa3"}
                            style={{width: '300px'}}
                            type="text" 
                            placeholder="Write your answer here" 
                            onChange = {this.onGuessEntered}
                            onKeyDown = {this.handleKeyDown}                        
                            value = {guess}
                            readOnly = {readOnly}
                            disabled = {disabled}
                            />
                        <button 
                            className={'b tc ml2 br-pill pa3 bg-light-green shadow-3 self-center'}
                            style={{
                                borderStyle: 'none',   
                                backgroundColor: '#00bf72'                                                             
                                }}
                            onClick = {() => this.handleOkButton()}
                            disabled = {disabled}
                            >
                        OK
                        </button>
                        <button 
                            className={'b tc ml2 br-pill pa3 white shadow-3 self-center'}                                            
                            style={{
                                borderStyle: 'none',
                                backgroundColor: '#008793'
                            }}
                            onClick = {() => this.newCountry(countries)}
                            >
                            Don't know. Change country
                        </button> 

                        {
                            guessEntered?
                                (guess.toLowerCase()===randomElement[topic].toLowerCase()?
                                    <div className={'flex justify-center flex-column'}>
                                        <h2 className={'b mt3 mb2'}>BRAVO! That's right!</h2>  
                                        <button 
                                            className={'b ba br-pill shadow-3 tc mv3 pa3 white bg-navy self-center'}
                                            style={{
                                                borderStyle: 'none',
                                                    }}
                                            onClick = {() => {this.newCountry(countries);}}
                                            >
                                            Play again
                                        </button>   
                                    </div>
                                    :
                                    <div className={'flex justify-center flex-column'}> 
                                            <h2 className={'b mt3 mb2'}>Keep trying!</h2>
                                            <h3 className={'mt1 mb3'}>The {topic} of {randomElement.name} is {randomElement[topic]}!</h3>
                                            <button 
                                                className={'b a br-pill shadow-3 tc mb3 pa3 white bg-navy self-center'}                                            
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
        )}
    
}

export default GuessTheTopic;