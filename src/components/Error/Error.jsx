import React from 'react';
import img from './icons/error.svg';
import s from './Error.module.scss';


const Error = () => (
    <div className={s.Error}>
        <img className={s.Error__img} src={img} alt="404"/>
        <span className={s.Error__text}>Some problems here...</span>
        <span className={s.Error__text}>Will fix it ASAP!</span>
    </div>

);
export default Error;
