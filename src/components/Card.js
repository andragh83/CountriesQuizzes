import React from 'react';

const Card = ({ img, name, region, capital, languages, population}) => {
    return(
        <div className={"tc pa3 br3 grow shadow-3 tl w-100"}>
            <img 
                className={'h4 w5 dib ba b--black-05 pa2'}
                alt='flag' 
                src={img}
            />
            <h2 className={'tc'}>{name}</h2>
            <hr className="mw3 bb bw1 b--black-10"></hr>
            <h3>Region: {region}</h3> 
            <h3>Capital: {capital}</h3>
            <p>Languages: {languages}</p>
            <p>Population: {population} people</p>
        </div>
    )
}

export default Card;