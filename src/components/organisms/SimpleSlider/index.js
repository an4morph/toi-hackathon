import React from 'react'
import Slider from 'react-slick'

import { injectGlobal } from 'styled-components'

injectGlobal`
  h3{
    width:200px;
    height:200px;
  }
  h3 img{
    width:200px;
    height:200px;
  }
  .container-m{
    margin:0 auto;
    width:950px;
  }
  .reviews-content-card-star-rt{
    display:flex;
    justify-content: left;
    padding-top:10px;
  }
  .slick-slider{
    height: 275px;
  }
  .slick-list{
    height:275px;
  }
  .slick-initialized,
  .slick-slide,
   .slick-slide,
   .slick-active{
    height:274.5px
  }
`

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: '#ff7f34'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: '#ff7f34'}}
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
      <div className='container'>
      <Slider {...settings}>
        <div>
          <h3>
            <img src="slider1.jpg" alt="" />
            <div className="reviews-content-card-star-rt">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div>
          </h3>
        </div>
        <div><h3><img src="slider2.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="slider3.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="slider4.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="slider5.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="slider6.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="slider7.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
          <div><h3><img src="slider8.jpg" alt="" />  <div className="reviews-content-card-star-rt">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div></h3></div>
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider
