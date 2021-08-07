import React from 'react';
import s from './SearchBar.module.scss';

const SearchBar = ({ value, searchHandler }) => (
    <input
        className={s.SearchBar}
        type="search"
        name="search"
        placeholder="Search for Hero"
        value={value}
        onChange={searchHandler}
        autoComplete="off"
    />
);

export default SearchBar;
