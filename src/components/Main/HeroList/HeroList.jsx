import React, { Component } from 'react';
import RestApiService from "../../../services/RestApiService";
import s from './HeroList.module.scss';
import { addConditionedStyle } from '../../../functions/functions';

class HeroList extends Component {

    restApiService = new RestApiService();
    LS_KEY = this.restApiService._LS_KEY;

    state = {
        allHeroes: []
    };

    componentDidMount() {
        this.setState({
            allHeroes: JSON.parse(localStorage.getItem(this.LS_KEY))
        });
    }

    render() {
        const listOfHeroes = this.state.allHeroes.map(hero => (
            <li key={hero.id}>
                <button>{hero.name}</button>
            </li>
        ));
        const ulClass = addConditionedStyle(!this.props.randomOpened, [s.List__ul], s.full);

        return (
            <aside className={s.List}>
                <ul className={ulClass.join(' ')}>
                    {listOfHeroes}
                </ul>
            </aside>
        );
    }
}

export default HeroList;
