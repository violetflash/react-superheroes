import React, { Component } from 'react';
import Header from "../Header";
import Panel from "../Panel";
import Main from '../Main/';
import RestApiService from "../../services/RestApiService";

class App extends Component {
    state = {
        randomOpened: true,
        target: null
    }

    getData = new RestApiService();

    toggleHandler = () => {
        this.setState(() => {
            return { randomOpened: !this.state.randomOpened };
        });
    }

    setTarget = id => {
        this.getData.getPerson(id).then(res => {
            this.setState({ target: res });
            console.log(res);
        });

    };

    render() {

        return (
            <>
                <Header/>
                <Panel
                    toggleHandler={this.toggleHandler}
                    randomOpened={this.state.randomOpened}
                    setTarget={this.setTarget}
                    target={this.state.target}
                    getData={this.getData}
                />
                <Main
                    randomOpened={this.state.randomOpened}
                    setTarget={this.setTarget}
                    target={this.state.target}
                />
            </>
        );
    }
}

export default App;
