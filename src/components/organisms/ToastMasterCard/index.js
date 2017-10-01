import React from 'react'
import { injectGlobal } from 'styled-components'
import { Link } from 'react-router-dom'

const ToastMasterCard = ({ ...props }) => {
  const item = props.location.state
  return (
    <div>
      <div className="rep">
        <div className="logo">
          <img src="toimaster_small.svg" />
        </div>
        <div className="linkks">
          <Link to={{ pathname: '/construct', state: 0 }}>
            <p>Рестораны</p>
            <img src="restaurants_icon.svg" alt="" />
          </Link>
          <Link to={{ pathname: '/construct', state: 1 }}>
            <p>Ведущие</p>
            <img src="showmen_icon.svg" alt="" />
          </Link>
          <Link to={{ pathname: '/construct', state: 2 }}>
            <p>Шоу-программа</p>
            <img src="shows_icon.svg" alt="" />
          </Link>
          <Link to={{ pathname: '/construct', state: 3 }}>
            <p>Фото/Видеосьемка</p>
            <img src="videos_icon.svg" alt="" />
          </Link>
          <Link to={{ pathname: '/construct', state: 4 }}>
            <p>Прочее</p>
            <img src="other_icon.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="restaurant-card">
          <div className="lolkek">
            <h1>{item.name}</h1>
            <div className="header-content">
              <div className="reviews-content-card-star-rt">
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
                <img src="star.svg" alt="" />
              </div>
              <p>11 отзывов</p>
            </div>
          </div>
          <hr />
          <div className="restaurant-contacts row">
            <div className="col-lg-6">
              <p>{item.type}</p>
              <p>Ведущий мероприятий</p>
            Цена: {item.price}$ за мероприятие<br />
              Телефон: {item.phone}
            </div>
            <div className="col-lg-6">
              <img src={item.photo} alt="" />
            </div>
          </div>
          <div className="restaurant-desc">
            <div>
              <h2>Описание</h2>
            </div>
            <hr />
            {item.description}
          </div>
        </div>
      </div>
    </div>
  )
}

ToastMasterCard.propTypes = {}

export default ToastMasterCard
