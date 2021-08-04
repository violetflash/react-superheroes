import React, { Component } from 'react';
import s from './RandomHeroes.module.scss';
import RestApiService from '../../services/RestApiService/';
import { getRandomIDsFromArr } from '../../functions/functions';
import HeroRandomCard from './HeroRandomCard/';
import Loader from "../Loader";
import Error from "../Error";

class RandomHeroes extends Component {

    restApiService = new RestApiService();
    LS_KEY = 'heroesIDs';
    RAND_NUM = 10;

    state = {
        heroesID: [],
        isLoading: true,
        updating: true,
        error: false
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    componentDidMount() {
        if (!localStorage.getItem(this.LS_KEY)) {
            const array = [];
            this.restApiService.getAllData().then(heroes => {
                heroes.forEach(hero => {

                    array.push({
                        'id': hero.id,
                        'name': hero.name,
                        'fullName': hero.biography.fullName,
                        'image': this.restApiService.getImage(hero.slug, 'md')
                    });
                });
                localStorage.setItem(this.LS_KEY, JSON.stringify(array));
                this.setState({ heroesID: getRandomIDsFromArr(array, this.RAND_NUM) });
                this.setState({ isLoading: false });
            })
                .catch(this.onError);
        } else {
            const array = JSON.parse(localStorage.getItem(this.LS_KEY));
            this.setState({ heroesID: getRandomIDsFromArr(array, this.RAND_NUM) });
            this.setState({ isLoading: false });
        }

        this.updateHeroes();
    }

    updateHeroes = () => {
        console.log('start updating');
        if (this.state.updating) {
            this.updateInterval = setInterval(() => {
                this.setState({
                    heroesID: getRandomIDsFromArr(JSON.parse(localStorage.getItem(this.LS_KEY)), this.RAND_NUM)
                });
            }, 15000);
        }
    };

    // pauseUpdating = () => {
    //     if (!this.state.updating) return;
    //     this.setState({ updating: false });
    //     clearInterval(this.updateInterval);
    //     console.log('pause updating');
    // };
    //
    // resumeUpdating = () => {
    //     this.setState({ updating: true });
    //     this.updateHeroes();
    // };


    render() {
        const cards = !(this.state.isLoading || this.state.error) ?
            this.state.heroesID.map(hero => <HeroRandomCard {...hero} key={hero.id}/>) :
            <Loader/>;

        const errMessage = this.state.error ? <Error/> : null;

        return (
            <section className={s.RandomHeroes}
                // onMouseEnter={this.pauseUpdating}
                // onMouseLeave={this.resumeUpdating}
            >
                <div className={s.RandomHeroes__cards}>
                    {errMessage}
                    {cards}
                </div>
            </section>
        );
    }
}

export default RandomHeroes;
