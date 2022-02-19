import React from "react";
import Card from "./Card";

const CardList = ({ countries }) => {
  return countries.map((country, i) => {
    const languages = [];
    if (country.languages) {
      for (const value of Object.values(country.languages)) {
        languages.push(`${value}, `);
      }
    }

    return (
      <div className={"pa3 mr2"} key={i}>
        <Card
          img={country.flags.svg}
          name={country.name.common}
          region={country.region}
          capital={
            country.capital && country.capital.length === 0
              ? "N/A"
              : country.capital
          }
          languages={languages}
          population={country.population}
        />
      </div>
    );
  });
};

export default CardList;
