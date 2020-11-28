import React, { Component } from 'react';

class GuessTheTopic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomArrayOf3: [],
            randomElement: '', 
            play: false,
            guess: '',
            flagsDisplay: [],
            guessEntered: false,
            buttonPlayValue: ''
        };
      }

      componentDidMount () {

        const { countries } = this.props;
        this.setState({
            randomArrayOf3: [countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)]],
            buttonPlayValue: `Play 'Guess the Flag'!`
        })
      }

      handleClickPlay = (arrayOf3) => {
        if (!this.state.play) {
            this.setState({
                play: true,
                randomElement: arrayOf3[Math.floor(Math.random() * arrayOf3.length)],
                buttonPlayValue: `Close 'Guess the Flag'!`
            })
            
        } else {
            this.setState({
                play: false,
                buttonPlayValue: `Play 'Guess the Flag'!`
            })
            
        }
            
      }

      newPick = (arrayOf3) => {
        this.setState({
            play: true,
            randomElement: arrayOf3[Math.floor(Math.random() * arrayOf3.length)]
        })
     }

      handleMouseClick = (answer) => {
            this.setState ({guess: answer})
      }

      picturesDisplay = (array) => {

       const randomFlagArray = [];

       randomFlagArray[0] = array[Math.floor(Math.random() * array.length)];
       
       array.forEach(item => {
        if (item !== randomFlagArray[0]) {
            randomFlagArray[1] = item;
        }
       });

       array.forEach(item => {
        if (item !== randomFlagArray[0] && item !== randomFlagArray[1]) 
            randomFlagArray[2] = item
       });
       
        this.setState ({flagsDisplay: randomFlagArray}) ;
      }

      wrongAnswer = () => {
        this.setState({guess: ''})
      }

      playAgain = (countries) => {
        this.setState({
            randomArrayOf3: [countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)]],
            guess: ''})
      }


    render() {
       const { countries } = this.props;
       const { randomElement, play, guess, randomArrayOf3, flagsDisplay, buttonPlayValue } = this.state;
       console.log('random of array 3:', randomArrayOf3)

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
                    onClick = {() => {this.handleClickPlay(randomArrayOf3); this.picturesDisplay(randomArrayOf3)}}>
                    {buttonPlayValue}
                </button>
                {
                    play? 
                    <div>
                        <div className={'flex justify-center'}>
                            <h2>Which one is the flag of <span style={{borderBottom: '3px solid black'}}>{randomElement.name}</span>?</h2>
                        </div>
                        <div className={'pa3'}>
                            <button 
                                className={'ba tc pa3 ph3 mid-gray'}
                                style={{
                                    marginLeft: '0.5em',
                                    marginRight: '0.5em',
                                    marginBottom: '0.3em',
                                    backgroundImage: `url(${flagsDisplay[0].flag})`,
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    display: 'inline-block',
                                    width: '200px',
                                    color: 'rgba(0, 0, 0, 0)',
                                    fontSize: '3em'
                                    }}
                                    onClick = {() => this.handleMouseClick(flagsDisplay[0])}
                                >
                            Flag
                            </button>
                            <button 
                                className={'ba tc pa3 ph3 mid-gray'}
                                style={{
                                    marginLeft: '0.5em',
                                    marginRight: '0.5em',
                                    marginBottom: '0.3em',
                                    backgroundImage: `url(${flagsDisplay[1].flag})`,
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    display: 'inline-block',
                                    width: '200px',
                                    color: 'rgba(0, 0, 0, 0)',
                                    fontSize: '3em'
                                    }}
                                    onClick = {() => this.handleMouseClick(flagsDisplay[1])}
                                >
                            Flag
                            </button>
                            <button 
                                className={'ba tc pa3 ph3 mid-gray'}
                                style={{
                                    marginLeft: '0.5em',
                                    marginRight: '0.5em',
                                    marginBottom: '0.3em',
                                    backgroundImage: `url(${flagsDisplay[2].flag})`,
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    display: 'inline-block',
                                    width: '200px',
                                    color: 'rgba(0, 0, 0, 0)',
                                    fontSize: '3em'
                                    }}
                                    onClick = {() => this.handleMouseClick(flagsDisplay[2])}
                                >
                            Flag
                            </button>
                        </div>
                        {
                            guess ?
                                (guess.flag===randomElement.flag ?
                                    <div 
                                        className={'flex justify-center flex-column'}
                                        style={{color: 'green', fontSize: '2.5em', paddingTop: '0.3em', paddingBottom: '0.3em', fontWeight: 'Bold'}}>
                                        BRAVO! That's right!
                                        <button 
                                                className={'ba tc br3 pv3 ph3 white bg-navy self-center'}
                                                style={{
                                                    borderStyle: 'none', 
                                                    marginLeft: '0.5em',
                                                    marginRight: '0.5em',
                                                    marginTop: '0.3em',
                                                    width: '250px'
                                                    }}
                                                    onClick = {() => {
                                                        this.playAgain(countries); 
                                                        this.newPick(randomArrayOf3); 
                                                        this.picturesDisplay(randomArrayOf3);}
                                                        }
                                                >
                                            Play Again
                                            </button>
                                    </div>
                                    :
                                    <div 
                                        className={'flex justify-center flex-column'}
                                        style={{color: 'red', fontSize: '1.5em', paddingTop: '0.3em', paddingBottom: '0.3em'}}
                                        >
                                            Wrong! That's the flag of <span style={{fontWeight: 'Bold'}}>{guess.name}!</span>
                                            <button 
                                                className={'ba tc br3 pa3 white bg-navy self-center'}
                                                style={{
                                                    borderStyle: 'none', 
                                                    marginLeft: '1em',
                                                    marginRight: '1em',
                                                    marginTop: '0.3em',
                                                    width: '250px'
                                                    }}
                                                onClick = {this.wrongAnswer}
                                            >
                                            Try Again
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