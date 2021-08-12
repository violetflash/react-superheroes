import React from 'react';
import s from "./Logo.module.scss";
import logo from './superhero.svg';

const Logo = () => (
    <figure className={s.Logo}>
        <img className={s.Logo__img} src={logo} alt="Logo"/>
        <figcaption className={s.Logo__text}>Super Heroes App</figcaption>
    </figure>
);



export default Logo;
