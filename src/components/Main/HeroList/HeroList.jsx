import React, { Component } from 'react';
import RestApiService from "../../../services/RestApiService";
import s from './HeroList.module.scss';
import { addConditionedStyle } from '../../../functions/functions';

class HeroList extends Component {

    restApiService = new RestApiService();
    LS_KEY = this.restApiService._LS_KEY;

    state = {
        allHeroes: [],
        activeBtnID: null
    };

    componentDidMount() {
        this.setState({
            allHeroes: JSON.parse(localStorage.getItem(this.LS_KEY))
        });
    }

    render() {
        const { setTarget } = this.props;

        const btnHandler = id => {
            setTarget(id);
            this.setState({ activeBtnID:  id });
        };

        const listOfHeroes = this.state.allHeroes.map(hero => {
            const btnClass = addConditionedStyle(
                this.state.activeBtnID === hero.id,
                [s.List__btn],
                s.active
            );


            return (
                <li key={hero.id}>
                    <button
                        type="button"
                        className={btnClass.join(' ')}
                        onClick={() => btnHandler(hero.id)}
                    >
                        <span>{hero.name}</span>
                    </button>
                </li>
            );
        });
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
