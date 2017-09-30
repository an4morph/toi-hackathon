import React from 'react'
import { injectGlobal} from 'styled-components'

injectGlobal`
.service{
  display: block;
  height:auto;
  padding-top:20px;
}
.card{
  padding-top:20px;
  padding-bottom: 50px;
}
.header-center{
  margin-bottom: 100px;
  text-align: center;
}
.center{
  margin-bottom: 20px;
  text-align: center;
}
.service-content{
  display: flex;
  justify-content: space-around;
  margin: auto 100px;
}
.service-card{
  padding: 70px;
  text-align: center;
}
.service-card{
  padding: 10px;
  text-align: center;
}
.decription{
  text-align: center;
  max-width: 250px;
  margin: 0 auto;
  font-family: Open-sans;
}
p{
  font-size:17px;
}
img{
  width:100px;
  height:100px;
}
`
const Service = () => {
  return (
    <div className='col-xs-12 col-sm-12 col-lg-12 service'>
      <div className='header-center'>
        <h1>Преимущества нашего сервиса</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-4 col-lg-4 card'>
            <div className='center'>
              <img src="icon1.svg" alt="" />
              <p>Секономим время</p>
            </div>
            <div className="decription">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor
            </div>
          </div>
          <div className='col-xs-12 col-sm-4 col-lg-4 card'>
            <div className='center'>
              <img src="icon2.svg" alt="" />
              <p>Информация со всего Кыргызстана</p>
            </div>
            <div className="decription">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt
            </div>
          </div>
          <div className='col-xs-12 col-sm-4 col-lg-4 card'>
            <div className='center'>
              <img src="icon3.svg" alt="" />
              <p>Еще одня иконка</p>
            </div>
            <div className="decription">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {}

export default Service
