import React from 'react';
import topLeftImg from '../assets/house.png';
import topRightImg from '../assets/Solar.png';
import bottomImg from '../assets/grid.png';
import coinImg from '../assets/coin.png';
import './CoinAnimation.css';

const CoinAnimation = () => {
  return (
    <div className="AnimationContainer">
      <div id="top-left" className="point" style={{ backgroundImage: `url(${topLeftImg})` }}></div>
      <div id="top-right" className="point" style={{ backgroundImage: `url(${topRightImg})` }}></div>
      <div id="bottom" className="point" style={{ backgroundImage: `url(${bottomImg})` }}></div>
      <div id="coin" style={{ backgroundImage: `url(${coinImg})` }}></div>
    </div>
  );
};

export default CoinAnimation;