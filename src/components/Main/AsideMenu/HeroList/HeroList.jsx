import React, { Component } from 'react';
import RestApiService from "../../../../services/RestApiService";
import s from './HeroList.module.scss';
import { addConditionedStyle } from '../../../../functions/functions';
import Loader from "../../../Loader/";
import Error from "../../../Error/";

function HeroList(props) {
    const { setTarget } = props;

    const btnHandler = id => {
        setTarget(id);
    };

    const regExp = new RegExp(props.searchTerm, 'i');

    const result = props.allHeroes
        .filter(hero => regExp.test(hero.name))
        .map(hero => {
            const btnClass = addConditionedStyle(
                props.target?.id === hero.id,
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

    const listOfHeroes = props.error ?
        <Error/> :
        props.isLoading ? <Loader/> :
            result;

    const ulClass = addConditionedStyle(!props.randomOpened, [s.List], s.full);

    return (
        <ul className={ulClass.join(' ')}>
            {listOfHeroes}
        </ul>
    );
}

const addData = (View, getData) => {
    return class extends Component {


        LS_KEY = getData._LS_KEY;

        state = {
            allHeroes: [],
            error: false,
            isLoading: true
        };

        onError = e => {
            this.setState({ error: true });
            console.error(e);
        }

        componentDidMount = async () => {

            if (localStorage.getItem(this.LS_KEY)) {
                this.setState({
                    allHeroes: JSON.parse(localStorage.getItem(this.LS_KEY))
                });
                this.setState({ isLoading: false });
                return;
            }

            try {
                const array = await getData.saveAllRandDataToLS();
                this.setState(
                    { allHeroes: array });
            } catch (e) {
                this.onError(e);
            }
            this.setState({ isLoading: false });
        }

        render() {
            return <View
                {...this.props}
                allHeroes={this.state.allHeroes}
                error={this.state.error}
                isLoading={this.state.isLoading}
            />;
        }
    };
};

const restApiService = new RestApiService();

export default addData(HeroList, restApiService);


