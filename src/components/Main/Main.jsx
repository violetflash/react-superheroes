import React from 'react';
import s from './Main.module.scss';
import HeroList from "./HeroList";
import View from './View/';

const Main = props => {
    return (
        <section className={s.Main}>
            <div className="container">
                <div className={s.Main__content}>
                    <HeroList {...props}/>
                    <View />
                </div>
            </div>
        </section>
    );

};

export default Main;
