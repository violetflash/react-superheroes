import React, { Component } from "react";
import { getRandomIDsFromArr } from "../../functions/functions";
import Cards from "./Cards/";
import Controls from "./Controls/";
import RestApiService from "../../services/RestApiService/";
import s from "./RandomHeroes.module.scss";


class RandomHeroes extends Component {

    restApiService = new RestApiService();
    LS_KEY = this.restApiService._LS_KEY;
    RAND_NUM = 10;
    toggleHandler = this.props.toggleHandler;

    state = {
        randomHeroes: [],
        isLoading: true,
        error: false,
        // randomOpened: true,
        intervalID: null
    };

    onError = () => {
        this.setState({
            error: true,
            isLoading: false
        });
    };

    async componentDidMount() {
        //fills state with random heroes
        //check if data already exist
        if (localStorage.getItem(this.LS_KEY)) {
            this.getRandomHeroesFromLS();
            return;
        }

        try {
            const array = await this.restApiService.saveAllRandDataToLS();
            this.setState({
                randomHeroes: getRandomIDsFromArr(array, this.RAND_NUM),
                isLoading: false
            });
        } catch (e) {
            this.onError(e);
        }
    }

    getRandomHeroesFromLS = () => {
        const array = JSON.parse(localStorage.getItem(this.LS_KEY));
        this.setState({
            randomHeroes: getRandomIDsFromArr(array, this.RAND_NUM),
            isLoading: false
        });
    };

    updateHeroes = () => {
        const updateInterval = setInterval(() => {
            this.setState({
                randomHeroes: getRandomIDsFromArr(JSON.parse(localStorage.getItem(this.LS_KEY)), this.RAND_NUM)
            });
        }, 15000);
        this.setState({ intervalID: updateInterval });
    }

    // toggleHandler = () => {
    //     this.setState(() => {
    //         return { randomOpened: !this.state.randomOpened };
    //     });
    // }

    pauseUpdating = () => {
        clearInterval(this.state.intervalID);
        this.setState({ intervalID: null });
    };

    render() {

        const cards = this.props.randomOpened ?
            <Cards
                {...this.state}
                updateHeroes={this.updateHeroes}
                pauseUpdating={this.pauseUpdating}
                setTarget={this.props.setTarget}
            /> :
            null;

        return (
            <section className={s.RandomHeroes}>
                <Controls
                    toggleHandler={this.toggleHandler}
                    randomOpened={this.props.randomOpened}
                    updateHeroes={this.updateHeroes}
                    pauseUpdating={this.pauseUpdating}
                    getRandomHeroesFromLS={this.getRandomHeroesFromLS}
                />
                {cards}
            </section>
        );
    }
}

export default RandomHeroes;
