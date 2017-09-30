import React from 'react'
import { injectGlobal} from 'styled-components'

injectGlobal`
.service{
  display: block;
}
.service-header{
  margin-bottom: 100px;
  text-align: center;
}
.service-card-header{
  margin-bottom: 20px;
  text-align: center;
}
.service-content{
  display: flex;
  justify-content: space-around;
  margin: auto 100px;
}
.service-card{
  padding:70px;
  text-align: center;
}
.service-card{
  padding:10px;
  text-align: center;
}
.decription{
  width:250px;
}
.service-content img{
  width:100px;
  height:100px;
}
`
const Service = () => {
  return (
    <div className='service'>
      <div className='service-header'>
        <h1>Преимущества нашего сервиса</h1>
      </div>
      <div className='service-content'>
        <div className='service-card'>
          <div className='service-card-header'>
            <img src="icon1.svg" alt="" />
            <h4>Секономим время</h4>
          </div>
          <div className="decription">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor
          </div>
        </div>
        <div className='service-card'>
          <div className='service-card-header'>
            <img src="icon2.svg" alt="" />
            <h4>Информация со всего Кыргызстана</h4>
          </div>
          <div className="decription">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt
          </div>
        </div>
        <div className='service-card'>
          <div className='service-card-header'>
            <img src="icon3.svg" alt="" />
            <h4>Еще одня иконка</h4>
          </div>
          <div className="decription">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut
          </div>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {}

export default Service
