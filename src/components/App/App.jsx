import React, { Component } from 'react';
import Header from "../Header";
import RandomHeroes from "../RandomHeroes";
import s from './App.module.scss';

class App extends Component {
    state = {
        randomOpened: true
    }

    toggleRandomHeroes = () => {
        this.setState(() => {
            console.log('wtf');
            return { randomOpened: !this.state.randomOpened };
        });
    }

    render() {

        const randomHeroes = this.state.randomOpened ? <RandomHeroes /> : null;
        const toggleButton =  <button
            className={s.App__temBtn}
            onClick={this.toggleRandomHeroes}
        >Toggle random Heroes</button>;

        return (
            <>
                <Header/>
                {randomHeroes}
                {toggleButton}
            </>
        );
    }
}

export default App;