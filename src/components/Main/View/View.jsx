import React from 'react';
import s from './View.module.scss';
import HeroCard from './HeroCard/';

const View = ({ target }) => {

    const content = target ? <HeroCard {...target}/> :
        <p>Choose a hero to see his specification</p>;


    return (
        <section className={s.View}>
            {content}
        </section>
    );

};

export default View;
