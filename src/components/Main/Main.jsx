import React from 'react';
import s from './Main.module.scss';
import HeroList from "./HeroList";
import View from './View/';

const Main = () => {
    return (
        <section className={s.Main}>
            <div className="container">
                <div className={s.Main__content}>
                    <HeroList />
                    <View />
                </div>
            </div>
        </section>
    );

};

export default Main;