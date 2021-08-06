import React from 'react';
import s from './SearchBar.module.scss';

const SearchBar = () => (
    <input className={s.SearchBar} type="text" placeholder="Search for Hero"/>
);

export default SearchBar;
