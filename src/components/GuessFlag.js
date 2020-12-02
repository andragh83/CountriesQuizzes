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
            buttonPlayValue: '',
            disabled: false
        };
      }

      componentDidMount () {

        const { countries } = this.props;
        this.setState({
            randomArrayOf3: [countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)]],
            buttonPlayValue: `Guess the Flag`
        })
      }

      handleClickPlay = (arrayOf3) => {
        if (!this.state.play) {
            this.setState({
                play: true,
                randomElement: arrayOf3[Math.floor(Math.random() * arrayOf3.length)],
                buttonPlayValue: `Close 'Guess the Flag'`
            })            
        } else {
            this.setState({
                play: false,
                buttonPlayValue: `Guess the Flag`
            })            
          }            
      }

      newPick = (arrayOf3) => {
        this.setState({
            play: true,
            randomElement: arrayOf3[Math.floor(Math.random() * arrayOf3.length)],
            disabled: false
        })
     }

      handleMouseClick = (answer) => {
            this.setState ({guess: answer});
            this.sendComponentScore(answer.flag);
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
            this.setState({guess: '', disabled: false})
      }

      playAgain = (countries) => {
        this.setState({
            randomArrayOf3: [countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)],
                            countries[Math.floor(Math.random() * countries.length)]],
            guess: '',
            disabled: false
        })
      }

      sendComponentScore = (answer) => {
          console.log('flag co', answer, this.state.randomElement.flag)
        this.setState({disabled: true})
        if (answer===this.state.randomElement.flag) {
                 this.props.addScore(true);
             } else {
                 this.props.addScore(false);
             }
       }

    render() {
       const { countries } = this.props;
       const { 
           randomElement, 
           play, 
           guess, 
           randomArrayOf3, 
           flagsDisplay, 
           buttonPlayValue,
           disabled
        } = this.state;
       console.log('random of array 3:', randomArrayOf3)

        return(
            <div className={"tc mv3"}>
                <button 
                    className={'b link dim br3 ph3 pv3 mb2 dib white shadow-3'}
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
                        <h2 className={'f3 tc mv2'}>Flag of <span className={'underline'}>{randomElement.name}?</span></h2>                        
                        <div className={'pa3'}>
                            <button 
                                className={'ba tc mv1 mh1 pa3 ph3 mid-gray'}
                                style={{
                                    backgroundImage: `url(${flagsDisplay[0].flag})`,
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    display: 'inline-block',
                                    width: '200px',
                                    color: 'rgba(0, 0, 0, 0)',
                                    fontSize: '3em'
                                    }}
                                    onClick = {() => this.handleMouseClick(flagsDisplay[0])}
                                    disabled={disabled}
                                >
                            Flag
                            </button>
                            <button 
                                className={'ba tc mv1 mh2 pa3 ph3 mid-gray'}
                                style={{
                                    backgroundImage: `url(${flagsDisplay[1].flag})`,
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    display: 'inline-block',
                                    width: '200px',
                                    color: 'rgba(0, 0, 0, 0)',
                                    fontSize: '3em'
                                    }}
                                    onClick = {() => this.handleMouseClick(flagsDisplay[1])}
                                    disabled={disabled}
                                >
                            Flag
                            </button>
                            <button 
                                className={'ba tc mv1 mh1 pa3 ph3 mid-gray'}
                                style={{
                                    backgroundImage: `url(${flagsDisplay[2].flag})`,
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    display: 'inline-block',
                                    width: '200px',
                                    color: 'rgba(0, 0, 0, 0)',
                                    fontSize: '3em'
                                    }}
                                    onClick = {() => this.handleMouseClick(flagsDisplay[2])}
                                    disabled={disabled}
                                >
                            Flag
                            </button>
                            <div>
                                <button 
                                    className={'b ba br3 shadow-3 tc mt3 pa3 white bg-light-red self-center'}
                                    style={{
                                        borderStyle: 'none',                                                                
                                        }}
                                    onClick = {() => {
                                                this.playAgain(countries); 
                                                this.newPick(randomArrayOf3); 
                                                this.picturesDisplay(randomArrayOf3);}
                                                }
                                >
                                Don't know. Reload
                                </button>
                            </div>
                        </div>
                        {
                            guess?
                                (guess.flag===randomElement.flag ?
                                    <div className={'flex justify-center flex-column'}>
                                        <h2 className={'green f3 b mv2'}>BRAVO! That's right!</h2>
                                        <button 
                                            className={'b ba br3 shadow-3 tc mv3 pa3 white bg-navy self-center'}                                            
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
                                    <div className={'flex justify-center flex-column'}>
                                            <h2 className={'red f3 b mv2'}>Wrong! That's the flag of <span className={'underline'}>{guess.name}!</span></h2>
                                            <button 
                                                className={'b ba br3 shadow-3 tc mv3 pa3 white bg-navy self-center'}                                            
                                                onClick = {this.wrongAnswer}
                                            >
                                            Try Again
                                            </button>
                                    </div>)
                                : <div></div>
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