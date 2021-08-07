import React, { Component } from 'react';
import s from "./AsideMenu.module.scss";
import SearchBar from "./SearchBar";
import HeroList from "./HeroList";

class AsideMenu extends Component {
    state = {
        search: ''
    }

    searchHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <aside className={s.AsideMenu}>
                <SearchBar values={this.state.search} searchHandler={this.searchHandler}/>
                <HeroList {...this.props} searchTerm={this.state.search}/>
            </aside>
        );
    }
}

export default AsideMenu;