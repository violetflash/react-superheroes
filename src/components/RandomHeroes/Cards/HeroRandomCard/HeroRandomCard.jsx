import React from 'react';
import s from "./HeroRandomCard.module.scss";
import question from '../../../../assets/images/question.png';
import RestApiService from "../../../../services/RestApiService";
import Loader from '../../../Loader';

class HeroRandomCard extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        // console.log('re-render');
    }


    render() {
        const { id, name, fullName, image } = this.props;

        const checkImageURL = url => {
            fetch(url).then(response => {
                if (response.ok) {
                    return true;
                }
            })
                .catch(e => {
                    console.log(e);
                })
        };

        const heroImg = checkImageURL(image) ? image : question;


        const addDefaultSrc = e => {
            e.target.src = question;
        };

        const onLoadHandler = () => {
            this.setState({ loading: false });
        };

        const cardClick = id => {
            const data = new RestApiService();
            data.getPerson(id).then(res => console.log(res));
        };

        const loader = this.state.loading ? <Loader/> : null;

        const img = <img
            onLoad={onLoadHandler}
            onError={addDefaultSrc}
            className={s.Card__img}
            src={image} alt={name}
        />;

        return (
            <article className={s.Card} onClick={() => cardClick(id)}>
                <figure className={s.Card__imgWrapper}>
                    {loader}
                    {img}
                </figure>
                <div className={s.Card__text}>
                    <span className={s.Card__line}/>
                    <span className={s.Card__name}>{name}</span>
                    <span className={s.Card__line}/>
                </div>
                <span className={s.Card__fullName}>{fullName === name ? '' : fullName}</span>
            </article>
        );
    }
}

export default HeroRandomCard;
