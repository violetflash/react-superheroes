import React from 'react';
import s from './Header.module.scss';
import Repo from "./Repo";
import Logo from "./Logo/";
// import Nav from "./Nav";

const Header = () => (
    <header className={s.Header}>
        <div className="container">
            <div className={s.Header__content}>
                <div className={s.Header__leftSide}>
                    <Logo />
                    {/*<Nav />*/}
                </div>
                <Repo/>
            </div>
        </div>
    </header>
);

export default Header;
