import React from 'react';
import s from "./Logo.module.scss";

const Logo = () => (
    <figure className={s.Logo}>
        <img className={s.Logo__img} src="/assets/icons/superhero.svg" alt="Logo"/>
        <figcaption className={s.Logo__text}>Super Hero App</figcaption>
    </figure>
);



export default Logo;