import React from 'react';

const SearchField = ({ onValueEntered, value }) => {
    return(
        <div className={"tc pa3"}>

            <input 
                className={"ba tc br3 pa3"}
                style={{width: '300px'}}
                type="text" 
                placeholder="Enter a country name to see info" 
                onChange = {onValueEntered}
                value = {value}
                />
        </div>
    )
}

export default SearchField;