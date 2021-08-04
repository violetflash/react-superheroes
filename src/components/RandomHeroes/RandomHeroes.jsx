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

    state = {
        randomHeroes: [],
        isLoading: true,
        updating: true,
        error: false,
        randomOpened: true
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
            const array = JSON.parse(localStorage.getItem(this.LS_KEY));
            this.setState({
                randomHeroes: getRandomIDsFromArr(array, this.RAND_NUM),
                isLoading: false
            });

            // this.updateHeroes();
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

        //starts setInterval
        // this.updateHeroes();
    }

    updateHeroes = () => {
        if (this.state.updating) {

            this.updateInterval = setInterval(() => {
                console.log('Updating...');
                this.setState({
                    randomHeroes: getRandomIDsFromArr(JSON.parse(localStorage.getItem(this.LS_KEY)), this.RAND_NUM)
                });
            }, 2000);
        }
    }

    toggleHandler = () => {
        this.setState(() => {
            return { randomOpened: !this.state.randomOpened };
        });
    }

    pauseUpdating = () => {
        if (!this.state.updating) return;
        this.setState({ updating: false });
        clearInterval(this.updateInterval);
        console.log('pause updating');
    };

    resumeUpdating = () => {
        console.log('resume updating');
        this.setState({ updating: true });
        this.updateHeroes();
    };


    render() {

        const cards = this.state.randomOpened ?
            <Cards
                {...this.state}
                updateHeroes={this.updateHeroes}
                updateInterval={this.updateInterval}
                pauseUpdating={this.pauseUpdating}
                resumeUpdating={this.resumeUpdating}
            /> :
            null;

        return (
            <section className={s.RandomHeroes}>
                <Controls
                    toggleHandler={this.toggleHandler}
                    randomOpened={this.state.randomOpened}
                />
                {cards}
            </section>
        );
    }
}

export default RandomHeroes;
