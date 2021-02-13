import React from 'react';

const Flag = ({randomCountry, disabled, onClick}) => {
    return(
        <button 
            className={'ba tc mv1 mh1 pa3 ph3 mid-gray'}
            style={{
                backgroundImage: `url(${randomCountry})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                display: 'inline-block',
                width: '200px',
                color: 'rgba(0, 0, 0, 0)',
                fontSize: '3em'
                }}
                onClick = {onClick}
                disabled={disabled}
            >
        Flag
        </button>
    )
}

export default Flag;