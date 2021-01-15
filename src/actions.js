import { 
    CHANGE_SEARCH_FIELD, 
    PLAY, 
    SHOW_CARDS, 
    GENERAL_SCORE,
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_FAILED
 } from './constants.js';

export const setSearchedCountry = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setPlay = (text) => ({
    type: PLAY,
    payload: text
})

export const setShowCards = (text) => ({
    type: SHOW_CARDS,
    payload: text
})

export const setGeneralScore = () => ({
    type: GENERAL_SCORE
})

export const requestCountries = () => (dispatch) => {
    dispatch({type: REQUEST_COUNTRIES_PENDING});
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_COUNTRIES_SUCCESS, payload: data})) 
    .catch(error => dispatch({type: REQUEST_COUNTRIES_FAILED, payload: error}))
}