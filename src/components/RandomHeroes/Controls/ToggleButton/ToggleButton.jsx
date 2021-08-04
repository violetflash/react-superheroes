import React from 'react';
import s from "./ToggleButton.module.scss";

const ToggleButton = ({ toggleHandler, randomOpened }) => {

    const buttonText = randomOpened ? 'Hide random Heroes' : 'Show random Heroes';
    return (
        <button
            className={s.ToggleButton}
            onClick={toggleHandler}
        >
            {buttonText}
        </button>
    );

};

export default ToggleButton;