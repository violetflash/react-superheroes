import React from 'react';
import s from './View.module.scss';
import HeroCard from './HeroCard/';
import ErrorBoundary from "../../ErrorBoundary";

function View(props) {
    const { target } = props;
    const content = target ? <HeroCard {...target}/> :
        <p>Choose a hero to see his specification</p>;

    return (
        <section className={s.View}>
            <ErrorBoundary>
                {content}
            </ErrorBoundary>
        </section>
    );
}

export default View;
