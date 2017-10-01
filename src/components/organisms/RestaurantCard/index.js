import React from 'react'

const RestaurantCard = ({ ...props }) => {
  const item = props.location.state
  return (
    <div>
      <div className="restaurant-card">
        <h2>{item.name}</h2>
        <img src={item.photo} alt="" />
        <p>Кухня: Национальная, европейская</p>
        <div className="restaurant-contacts">
        Телефон: {item.phone}
          <br />
        Адрес:{item.address}
        </div>
        <div className="restaurant-desc">{item.description}</div>
      </div>
    </div>
  )
}

RestaurantCard.propTypes = {}

export default RestaurantCard
