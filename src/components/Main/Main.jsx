import React from 'react';
import s from './Main.module.scss';
import View from './View/';
import AsideMenu from "./AsideMenu";

function Main(props) {
    const { target } = props;

    return (
        <section className={s.Main}>
            <div className="container">
                <div className={s.Main__content}>
                    <AsideMenu {...props}/>
                    <View target={target}/>
                </div>
            </div>
        </section>
    );
}

export default Main;
