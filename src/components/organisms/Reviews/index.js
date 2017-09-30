import React from 'react'
import { injectGlobal} from 'styled-components'

injectGlobal`
  .reviews-content-card-header>h4{
    margin:10px;
    height:0;
  }
  .reviews-content-card{
    padding: 10px;
    text-align: center;
    width: 250px;
    height: 300px;
  }
  .reviews-content-card-decription{
    width: auto;
    text-align: center;
  }
  .center{
    text-align:center;
  }
  .reviews-content-card-footer{
    font-wight:300;
    text-align:center;
  }
  .reviews-content-card-star{
    align-items:right;
    justify-content:center;
    margin:10px;
    margin-left:30px;
  }
  .reviews-content-card-star img{
    width:13px;
    height:13px;
    padding-right:20px;
  }
  .header-center{
    width:;
  }
  .left{
    text-align:left;
  }
  @media only screen and (min-width: 75em){
    .container {
      width: 65rem;
    }
  }
`
const Service = () => {
  return (
    <div className='col-sm-12 col-lg-12 col-xs-12'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-12 col-xs-12 left'>
            <h1>Последние комментарии</h1>
            <hr></hr>
          </div>
          <div className='col-xs-12 col-sm-12 col-lg-12'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-xs-12 col-sm-6'>
                  <div className='center'>
                    <h4>Imperial</h4>
                    <div className='reviews-content-card-star'>
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                    </div>
                  </div>
                  <div className='reviews-content-card-decription'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim </p>
                  </div>
                  <div className='reviews-content-card-footer'>
                    <h4>username</h4>
                  </div>
                </div>
                <div className='col-lg-3  col-xs-12 col-sm-6'>
                  <div className='center'>
                    <h4>Кондитерский дом Куликовский</h4>
                    <div className='reviews-content-card-star'>
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                    </div>
                  </div>
                  <div className='reviews-content-card-decription'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim </p>
                  </div>
                  <div className='reviews-content-card-footer'>
                    <h4>username</h4>
                  </div>
                </div>
                <div className='col-lg-3 col-xs-12 col-sm-6'>
                  <div className='center'>
                    <h4>Navat</h4>
                    <div className='reviews-content-card-star'>
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                    </div>
                  </div>
                  <div className='reviews-content-card-decription'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim </p>
                  </div>
                  <div className='reviews-content-card-footer'>
                    <h4>username</h4>
                  </div>
                </div>
                <div className='col-lg-3 col-xs-12 col-sm-6'>
                  <div className='center'>
                    <h4>Золотой Дракон</h4>
                    <div className='reviews-content-card-star'>
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                    </div>
                  </div>
                  <div className='reviews-content-card-decription'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim </p>
                  </div>
                  <div className='reviews-content-card-footer'>
                    <h4>username</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {}

export default Service
