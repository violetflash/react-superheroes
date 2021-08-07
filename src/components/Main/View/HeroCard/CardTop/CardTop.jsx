import React from 'react';
import s from './CardTop.module.scss';
import { addConditionedStyle, capitalizer } from "../../../../../functions/functions";

const CardTop = props => {
    const fullName = props.name !== props.biography.fullName ? props.biography.fullName : null;

    const alignmentClass = addConditionedStyle(
        props.biography.alignment === 'good',
        [s.Top__alignment],
        s.green);

    const race = props.appearance.race ?
        <span className={s.Top__infoItem}>
            <span className={s.Top__cat}>Race:</span>
            {props.appearance.race}
        </span> : null;

    const weight = (props.appearance.weight && parseInt(props.appearance.weight[1]) > 0) ?
        <span className={s.Top__infoItem}>
            <span className={s.Top__cat}>weight:</span>
            {props.appearance.weight[1]}
        </span> :
        null;

    const height = (props.appearance.height && parseInt(props.appearance.height[1]) > 0) ?
        <span className={s.Top__infoItem}>
            <span className={s.Top__cat}>height:</span>
            {props.appearance.height[1]}
        </span> :
        null;

    const hairColor = (props.appearance.hairColor && props.appearance.hairColor.length > 1) ?
        <span className={s.Top__infoItem}>
            <span className={s.Top__cat}>hairColor:</span>
            {props.appearance.hairColor}
        </span> :
        null;

    const eyeColor = (props.appearance.eyeColor && props.appearance.eyeColor.length > 1) ?
        <span className={s.Top__infoItem}>
            <span className={s.Top__cat}>eyeColor:</span>
            {props.appearance.eyeColor}
        </span> :
        null;

    const aliases = props.biography.aliases && props.biography.aliases[0] !== "-" ?
        <span className={s.Top__aliases}>
            <span className={s.Top__cat}>aliases:</span>
            {props.biography.aliases.join(', ')}
        </span> :
        null;

    const occupation = props.work.occupation && props.work.occupation !== "-" ?
        <span className={s.Top__occupation}>
            <span className={s.Top__cat}>occupation:</span>
            {props.work.occupation}
        </span> :
        null;

    return (
        <div className={s.Top}>
            <figure className={s.Top__figure}>
                <img className={s.Top__img} src={props.images.lg} alt={props.name}/>
            </figure>
            <div className={s.Top__infoBlock}>
                <h1 className={s.Top__name}>{props.name}</h1>
                <h2 className={s.Top__fullName}>{fullName}</h2>
                <div className={s.Top__mainInfo}>
                    {aliases}
                    {occupation}
                </div>

                <div className={s.Top__info}>
                    <div className={s.Top__column}>
                        <span className={alignmentClass.join(' ')}>
                            <span className={s.Top__cat}>alignment:</span>
                            {capitalizer(props.biography.alignment)}
                        </span>
                        {race}
                        <span className={s.Top__infoItem}>
                            <span className={s.Top__cat}>gender:</span>
                            {props.appearance.gender}
                        </span>
                        {weight}
                        {height}
                        {hairColor}
                        {eyeColor}

                    </div>
                </div>
            </div>

        </div>
    );

};

export default CardTop;