import React from 'react';
import s from "./Cards.module.scss";
import HeroRandomCard from "./HeroRandomCard/";
import Loader from "../../Loader";
import Error from "../../Error";


class Cards extends React.Component {

    componentDidMount() {
        this.props.updateHeroes();
    }

    componentWillUnmount() {
        clearInterval(this.props.updateInterval);
    }

    render() {

        const { randomHeroes, isLoading, error, pauseUpdating, resumeUpdating } = this.props;

        const loader = isLoading ? <Loader/> : null;
        const cards = !(isLoading || error) ?
            randomHeroes.map(hero => <HeroRandomCard {...hero} key={hero.id}/>) :
            null;
        const errMessage = error ? <Error/> : null;

        return (
            <section className={s.Cards} onMouseEnter={pauseUpdating} onMouseLeave={resumeUpdating}>
                <div className={s.Cards__cards}>
                    {loader}
                    {errMessage}
                    {cards}
                </div>
            </section>
        );
    }
}

export default Cards;