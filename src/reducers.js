import { 
        CHANGE_SEARCH_FIELD, 
        PLAY, 
        SHOW_CARDS, 
        GENERAL_SCORE,
        REQUEST_COUNTRIES_PENDING,
        REQUEST_COUNTRIES_SUCCESS,
        REQUEST_COUNTRIES_FAILED
     } from './constants.js';

const initialStateSearch = {
    searchedCountry: '',
    play: false,
    playButton: 'PLAY',
    showCards: false,
    showCardsButton: 'SHOW COUNTRIES',
    generalScore: 0,
}


export const searchCountries = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:{
            return { ...state, searchedCountry: action.payload};
        }
        case PLAY:{ 
            return { 
                ...state, 
                play: !state.play, 
                playButton: state.play? 'PLAY': 'CLOSE'
                }
            }
        case SHOW_CARDS:{
            return {
                ...state,
                showCards: !state.showCards,
                showCardsButton: state.showCards? 'SHOW COUNTRIES' : 'Hide Country'
                }
            }
        case GENERAL_SCORE: {
            return {
                ...state,
                generalScore: state.generalScore++
            }
        }
        default:
            return state;
    }
}

const initialStateCountries = {
    isPending: false,
    countries: [],
    error: ''
}

export const requestCountries = (state=initialStateCountries, action={}) => {
    switch (action.type) {
        case REQUEST_COUNTRIES_PENDING: {
            return {
                ...state,
                isPending: true
            }
        }
        case REQUEST_COUNTRIES_SUCCESS: {
            return {
                ...state,
                countries: action.payload,
                isPending: false,
            }
        }
        case REQUEST_COUNTRIES_FAILED: {
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        }
    default: 
        return state;
    }
}