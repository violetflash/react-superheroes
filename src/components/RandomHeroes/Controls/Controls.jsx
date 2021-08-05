import React from 'react';
import s from "./Controls.module.scss";
import ToggleButton from "./ToggleButton/";
import RefreshButton from "./RefreshButton/";

const Controls = props => {
    const { updateHeroes, pauseUpdating, randomOpened, getRandomHeroesFromLS } = props;

    return (
        <div className={s.Controls}>
            <div className="container">
                <div className={s.Controls__content}>
                    <RefreshButton
                        updateHeroes={updateHeroes}
                        pauseUpdating={pauseUpdating}
                        randomOpened={randomOpened}
                        getRandomHeroesFromLS={getRandomHeroesFromLS}
                    />
                    <ToggleButton {...props}/>
                </div>
            </div>
        </div>
    );

};

export default Controls;
