import React from 'react';
import './Button.scss'


const Button = (props) => {
    return (
        <button className="button_custom">
            {props.texte}
        </button>
    );
};

export default Button;