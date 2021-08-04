import React from 'react';
import s from "./Controls.module.scss";
import ToggleButton from "./ToggleButton/";

const Controls = props => {
    return (
        <div className={s.Controls}>
            <div className="container">
                <div className={s.Controls__content}>
                    <ToggleButton {...props}/>
                </div>
            </div>
        </div>
    );

};

export default Controls;