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
    justify-content: center;
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
      <div className='container-m'>
      <Slider {...settings}>
        <div>
          <h3>
            <img src="dinner.jpg" alt="" />
            <div className="reviews-content-card-star-rt">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div>
          </h3>
        </div>
        <div><h3><img src="photographer.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="singer.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="flowers.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="singer.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="magicians.jpg" alt="" />  <div className="reviews-content-card-star-rt">
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
            <img src="star.svg" alt="" />
          </div></h3></div>
        <div><h3><img src="limousine.jpg" alt="" />  <div className="reviews-content-card-star-rt">
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
