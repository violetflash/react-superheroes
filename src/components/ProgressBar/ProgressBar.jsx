import React, { useEffect } from 'react';
import useProgress from "../../services/Hooks/useProgress";
import useProgressValue from "../../services/Hooks/useProgressValue";
import s from "./ProgressBar.module.scss";
import styled from 'styled-components';

const Bar = styled.div`

  &::before {
    width: ${({ value }) => value}%;
    background: ${({ bg }) => bg};
    transition: all 0.6s ease;
  }
`;


const ProgressBar = ({ stat, value }) => {

    const bg = value < 33 ?
        `linear-gradient(90deg, #009ad9 0%, #009ad9 55%, #4ed024 100%)` :
        value < 65 ? `linear-gradient(90deg, #009ad9 0%, #4ed024 65%, #ffba00 100%)` :
            value < 85 ? `linear-gradient(90deg, #009ad9 0%, #4ed024 35%, #d99300 65%, #ffba00 100%)` :
                `linear-gradient(90deg, #009ad9 0%, #4ed024 35%, #d99300 65%, #ffba00 90%, #f50606 100%)`;

    const { progress, setProgress } = useProgress();
    const { progressValue, setProgressValue } = useProgressValue();

    useEffect(() => {
        setProgress(value);
        setProgressValue(value);
    });

    return (
        <div className={s.Bar}>
            <p className={s.Bar__title}>{stat}</p>
            <div className={s.Bar__bar}>
                <Bar className={s.Bar__filledBar} value={progress} bg={bg}/>
                <span className={s.Bar__value}>{progressValue}</span>
            </div>
        </div>
    );

};

export default ProgressBar;