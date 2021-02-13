import React from 'react';

const Button = ({bgColor, color, text, textSize, width, onClick}) => {
    return(
        <button     
            className={'ba br-pill ph4 pv3 mv2 dib shadow-3 grow self-center ' + color + ' ' + textSize}            
                    style={{
                        backgroundColor: bgColor, 
                        borderStyle: 'none',
                        width: width
                        }}
            onClick = {onClick}>
           {text}
        </button>
    )
}

export default Button;