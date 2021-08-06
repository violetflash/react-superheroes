import React from 'react';
import styled from 'styled-components';
import icon from './icon/refresh.svg';

const Refresh = styled.button`
  margin-right: 20px;
  width: 16px;
  height: 16px;
  background-image: url(${icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 0.3s ease 0s;
  //transform: rotate(0);


  &.active {
    animation: rotate 0.3s ease;
    animation-fill-mode: forwards;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
  
`;

class RefreshButton extends React.Component {
    state = {
        rotating: false
    }


    render() {
        const { updateHeroes, pauseUpdating, randomOpened, getRandomHeroesFromLS } = this.props;

        const revertRollingState = () => {
            this.setState(() => {
                return { rotating: !this.state.rotating };
            });
        };

        const refreshHandler = () => {
            revertRollingState();
            pauseUpdating();
            getRandomHeroesFromLS();
            updateHeroes();
        };

        const animationEndHandler = () => {
            revertRollingState();
        };

        const refresh = this.state.rotating ? 'refresh active' : 'refresh';

        return randomOpened ? <Refresh
            className={refresh}
            onClick={refreshHandler}
            onAnimationEnd={animationEndHandler}
        /> : null;

    }
}

export default RefreshButton;
