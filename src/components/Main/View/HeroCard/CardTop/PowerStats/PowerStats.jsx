import React from 'react';
import s from './PowerStats.module.scss';
import ProgressBar from '../../../../../ProgressBar/';

function PowerStats(props) {
    const powerstats = props;
    const arr = [];
    for (const key in powerstats) {
        arr.push({
            stat: key,
            value: powerstats[key]
        });
    }

    const bars = arr.map(bar => <ProgressBar stat={bar.stat} value={bar.value} key={bar.stat}/>);
    return (
        <div className={s.PowerStats}>
            <h3 className={s.PowerStats__title}>PowerStats:</h3>
            {bars}
        </div>
    );
}

export default PowerStats;