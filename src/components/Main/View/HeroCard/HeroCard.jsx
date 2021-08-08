import React from 'react';
import CardTop from "./CardTop";
import s from './HeroCard.module.scss';

const HeroInfo = props => {

    return (
        <article className={s.HeroCard}>
            <CardTop {...props}/>
        </article>
    );

};

export default HeroInfo;