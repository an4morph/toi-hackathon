import React from 'react'
import Slider from 'react-slick'

import { injectGlobal } from 'styled-components'

injectGlobal`
  h3{
    width:300px;
    height:250px;
  }
  h3 img{
    width:300px;
    height:250px;
  }
`

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  );
}

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Slider {...settings}>
        <div><h3><img src="dinner.jpg" alt="" /></h3></div>
        <div><h3><img src="photographer.jpg" alt="" /></h3></div>
        <div><h3><img src="singer.jpg" alt="" /></h3></div>
        <div><h3><img src="flowers.jpg" alt="" /></h3></div>
        <div><h3><img src="magicians.jpg" alt="" /></h3></div>
        <div><h3><img src="limousine.jpg" alt="" /></h3></div>
      </Slider>
    );
  }
}

export default SimpleSlider
