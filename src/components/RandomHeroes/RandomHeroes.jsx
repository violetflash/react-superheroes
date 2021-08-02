import React, { Component } from 'react';
import s from './RandomHeroes.module.scss';
import RestApiService from '../../services/RestApiService/';
import { getRandomIDsFromArr } from '../../functions/functions';
import HeroRandomCard from './HeroRandomCard/';

class RandomHeroes extends Component {
    RAND_NUM = 12;

    state = {
        heroesID: []
    }

    getHeroes = () => {

        if (!this.state.heroesID.length) {
            const array = [];
            const data = new RestApiService();
            data.getAllData().then(heroes => {
                heroes.forEach(hero => {

                    array.push({
                        'id': hero.id,
                        'name': hero.name,
                        'fullName': hero.biography.fullName,
                        'image': data.getImage(hero.slug, 'sm')
                    });
                });
                this.setState({ heroesID: getRandomIDsFromArr(array, this.RAND_NUM) });
            });
        }
    }

    render() {
        this.getHeroes();

        const renderCards = this.state.heroesID.map(hero => <HeroRandomCard {...hero} key={hero.id}/>);

        return (
            <section className={s.RandomHeroes}>
                <div className={s.RandomHeroes__cards}>
                    {renderCards}
                </div>
            </section>
        );
    }
}

export default RandomHeroes;