import React from 'react';
import s from './View.module.scss';
import HeroCard from './HeroCard/';
import Error from "../../Error";

class View extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { target } = this.props;
        const content = this.state.hasError ? <Error /> :
            target ? <HeroCard {...target}/> :
                <p>Choose a hero to see his specification</p>;

        return (
            <section className={s.View}>
                {content}
            </section>
        );
    }
}

export default View;
