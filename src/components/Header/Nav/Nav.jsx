import React from 'react';
import s from "./Nav.module.scss";

const Nav = () => {

    const navList = ['Link1', 'Link2', 'Link3'];
    const links = navList.map(link => (
        <a className={s.Nav__link}
           href=""
           key={link}
        >{link}</a>
    ));

    return (
        <nav className={s.Nav}>
            {links}
        </nav>
    );
};

export default Nav;