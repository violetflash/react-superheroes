import React from 'react';
import CardTop from "./CardTop";
import s from './HeroCard.module.scss';
// import ErrorButton from "../../../ErrorButton";

const HeroInfo = props => {
    return (
        <article className={s.HeroCard}>
            <CardTop {...props}/>
            {/*<ErrorButton />*/}
        </article>
    );
};

export default HeroInfo;
