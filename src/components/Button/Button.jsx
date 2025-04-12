import React from 'react';
import style from './Button.module.css';

const Button = ({ estim, children }) => {
    return (
        <button className={style.button} onClick={estim}>
            {children}
        </button>
    );
};


export default Button;