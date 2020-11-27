import React from 'react';
import Card from './Card';

const CardList = ({ countries }) => {
    
    return (
        countries.map((country, i) => {
            const languages = country.languages.map(item => ' ' + item.name).toString();
            console.log('languages', languages)
        return (
            <div className={"pa3 mr2"} key={i}>
                <Card 
                img={country.flag} 
                name={country.name} 
                region={country.region} 
                capital={country.capital.length === 0? "N/A" : country.capital }
                languages={languages}
                population={country.population}
                />
            </div>
        )
    })
    )
}

export default CardList;