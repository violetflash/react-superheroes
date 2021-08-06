import React, { Component } from 'react';
import Header from "../Header";
import RandomHeroes from "../RandomHeroes";
import Main from '../Main/';

class App extends Component {
    state = {
        randomOpened: true
    }

    toggleHandler = () => {
        this.setState(() => {
            return { randomOpened: !this.state.randomOpened };
        });
    }

    render() {

        return (
            <>
                <Header/>
                <RandomHeroes toggleHandler={this.toggleHandler} randomOpened={this.state.randomOpened}/>
                <Main randomOpened={this.state.randomOpened}/>
            </>
        );
    }
}

export default App;
