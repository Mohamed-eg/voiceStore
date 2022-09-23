import React, { Component } from 'react';
import Shoes from '../img/logoShose.png';

export default class Slider extends Component {

  render() {
    return (
      <div className='SliderConatner'>
        <img src={Shoes} alt="Nike" />
      </div>
    )
  }
}
