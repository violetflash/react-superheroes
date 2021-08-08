import React from 'react';
import s from './CardTop.module.scss';
import { addConditionedStyle, capitalizer } from "../../../../../functions/functions";
import PowerStats from "./PowerStats/";

const CardTop = props => {
    const fullName = props.name !== props.biography.fullName ? props.biography.fullName : null;

    const alignmentClass = addConditionedStyle(
        props.biography.alignment === 'good',
        [s.Top__alignment],
        s.green);

    const getProp = (condition, title, value, propClassName = s.Top__infoItem) => {
        const newValue = condition ? value : 'no data found';

        return (
            <span className={propClassName}>
                <span className={s.Top__cat}>{title}:</span>
                {newValue}
            </span>
        );
    };

    const alignment = getProp(
        props.biography.alignment !== "-", 'alignment',
        capitalizer(props.biography.alignment), alignmentClass.join(' '));

    const gender = getProp(
        props.appearance.gender !== "-", 'gender',
        props.appearance.gender);

    const race = getProp(
        props.appearance.race, 'race',
        props.appearance.race);

    const weight = getProp(
        props.appearance.weight && parseInt(props.appearance.weight[1]) > 0, 'weight',
        props.appearance.weight[1]);

    const height = getProp(
        props.appearance.weight && parseInt(props.appearance.height[1]) > 0, 'height',
        props.appearance.height[1]);

    const hairColor = getProp(
        props.appearance.hairColor.length > 1, 'hairColor',
        props.appearance.hairColor);

    const eyeColor = getProp(
        props.appearance.eyeColor.length > 1, 'eyeColor',
        props.appearance.eyeColor);

    const aliases = getProp(
        props.biography.aliases[0] !== "-", 'aliases',
        props.biography.aliases.join(', '), s.Top__aliases);

    const occupation = getProp(
        props.work.occupation && props.work.occupation !== "-", 'occupation',
        props.work.occupation, s.Top__occupation);


    return (
        <div className={s.Top}>
            <figure className={s.Top__figure}>
                <img className={s.Top__img} src={props.images.lg} alt={props.name}/>
            </figure>
            <div className={s.Top__infoBlock}>
                <div className={s.Top__names}>
                    <h1 className={s.Top__name}>{props.name}</h1>
                    <h2 className={s.Top__fullName}>{fullName}</h2>
                </div>
                <div className={s.Top__mainInfo}>
                    {aliases}
                    {occupation}
                </div>

                <div className={s.Top__info}>
                    <div className={s.Top__column}>
                        {alignment}
                        {race}
                        {gender}
                        {weight}
                        {height}
                        {hairColor}
                        {eyeColor}
                    </div>
                    <PowerStats {...props.powerstats} />
                </div>
            </div>

        </div>
    );

};

export default CardTop;