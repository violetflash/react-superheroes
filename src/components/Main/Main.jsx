import React from 'react';
import s from './Main.module.scss';
import HeroList from "./HeroList";
import View from './View/';
import styled from 'styled-components';
import bg from '../../assets/images/carbon.png';

const MainSection = styled.section`
  //background-image: url(${bg});
  background-size: 10px;
`;

const Main = props => {
    return (
        <MainSection className={s.Main}>
            <div className="container">
                <div className={s.Main__content}>
                    <HeroList {...props}/>
                    <View />
                </div>
            </div>
        </MainSection>
    );

};

export default Main;
