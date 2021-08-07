import React, { Component } from 'react';
import RestApiService from "../../../../services/RestApiService";
import s from './HeroList.module.scss';
import { addConditionedStyle } from '../../../../functions/functions';
import Loader from "../../../Loader/";
import Error from "../../../Error/";

class HeroList extends Component {

    restApiService = new RestApiService();
    LS_KEY = this.restApiService._LS_KEY;

    state = {
        allHeroes: [],
        activeBtnID: null,
        error: false,
        isLoading: true
    };

    onError(e) {
        this.setState({ error: true });
        console.error(e);
    }

    async componentDidMount() {

        if (localStorage.getItem(this.LS_KEY)) {
            this.setState({
                allHeroes: JSON.parse(localStorage.getItem(this.LS_KEY))
            });
            this.setState({ isLoading: false });
            return;
        }

        try {
            const array = await this.restApiService.saveAllRandDataToLS();
            this.setState(
                { allHeroes: array });
        } catch (e) {
            this.onError(e);
        }
        this.setState({ isLoading: false });
    }

    render() {
        const { setTarget } = this.props;

        const btnHandler = id => {
            setTarget(id);
            this.setState({ activeBtnID: id });
        };

        const regExp = new RegExp(this.props.searchTerm, 'i');

        const result = this.state.allHeroes
            .filter(hero => regExp.test(hero.name))
            .map(hero => {
                const btnClass = addConditionedStyle(
                    this.props.target?.id === hero.id,
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

        const listOfHeroes = this.state.error ?
            <Error/> :
            this.state.isLoading ? <Loader/> :
                result;

        const ulClass = addConditionedStyle(!this.props.randomOpened, [s.List], s.full);

        return (
            <ul className={ulClass.join(' ')}>
                {listOfHeroes}
            </ul>
        );
    }
}

export default HeroList;
