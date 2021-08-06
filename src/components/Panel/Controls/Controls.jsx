import React from 'react';
import s from "./Controls.module.scss";
import ToggleButton from "./ToggleButton/";
import RefreshButton from "./RefreshButton/";

const Controls = props => {
    const { updateHeroes, pauseUpdating, randomOpened, getRandomHeroesFromLS } = props;

    return (
        <div className={s.Controls}>
            <RefreshButton
                updateHeroes={updateHeroes}
                pauseUpdating={pauseUpdating}
                randomOpened={randomOpened}
                getRandomHeroesFromLS={getRandomHeroesFromLS}
            />
            <ToggleButton {...props}/>
        </div>
    );

};

export default Controls;
