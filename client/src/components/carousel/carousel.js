import React from 'react';
import Carousel from 'nuka-carousel';
import pic1 from './marisa-howenstine-Cq9slNxV8YU-unsplash.jpg';
import pic2 from './shirota-yuri-p0hDztR46cw-unsplash.jpg';
import pic3 from './alexander-dummer-UH-xs-FizTk-unsplash.jpg';
// import './carousel.css';


// React.PropTypes.oneOf(['first', 'current', 'max'])


export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <img src={pic1} alt=""/>
        <img src={pic2} alt=""/>
        <img src={pic3} alt=""/>
      </Carousel>
    );
  }
}