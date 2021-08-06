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
        this.props.pauseUpdating();
    }

    render() {

        const { randomHeroes, isLoading, error, pauseUpdating, updateHeroes } = this.props;

        const loader = isLoading ? <Loader/> : null;
        const cards = !(isLoading || error) ?
            randomHeroes.map(hero => <HeroRandomCard {...hero} key={hero.id} setTarget={this.props.setTarget}/>) :
            null;
        const errMessage = error || randomHeroes.length === 0 ? <Error/> : null;

        return (
            <section className={s.Cards} onMouseEnter={pauseUpdating} onMouseLeave={updateHeroes}>
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
