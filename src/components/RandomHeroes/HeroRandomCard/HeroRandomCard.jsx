import React from 'react';
import s from "./HeroRandomCard.module.scss";
import question from '../../../assets/images/question.png';

const HeroRandomCard = ({ name, fullName, image }) => {

    const addDefaultSrc = e => {
        e.target.src = question;
    };

    return (
        <article className={s.Card}>
            <figure className={s.Card__imgWrapper}>
                <img onError={addDefaultSrc} className={s.Card__img} src={image} alt={name}/>
            </figure>
            <div className={s.Card__text}>
                <span className={s.Card__line}/>
                <span className={s.Card__name}>{name}</span>
                <span className={s.Card__line}/>
            </div>
            <span className={s.Card__fullName}>{fullName === name ? '' : fullName}</span>
        </article>
    );
};

export default HeroRandomCard;
