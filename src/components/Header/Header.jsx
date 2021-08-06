import React from 'react';
import s from './Header.module.scss';
import Repo from "./Repo";
import Logo from "./Logo/";
import Nav from "./Nav";
import styled from 'styled-components';
import bg from '../../assets/images/carbon.png';

const MainHeader = styled.header`
  background-image: url(${bg});
  background-size: 7px;
`;

const Header = () => (
    <MainHeader className={s.Header}>
        <div className="container">
            <div className={s.Header__content}>
                <div className={s.Header__leftSide}>
                    <Logo />
                    <Nav />
                </div>
                <Repo/>
            </div>
        </div>
    </MainHeader>
);

export default Header;
