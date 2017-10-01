import React from 'react'

const ToastMasterCard = ({ ...props }) => {
  const item = props.location.state
  return (
    <div>
      <div className="toastmaster-card">
        <h2>{item.name}</h2>
        <img src={item.photo} alt="" />
        <p>Ведущий мероприятий</p>
        <div className="toastmaster-price">
        Цена: {item.price}$ за мероприятие
        </div>
        <div className="toastmaster-contacts">
        Телефон: {item.phone}
        </div>
        <div className="toastmaster-desc">{item.description}</div>
      </div>
    </div>
  )
}

ToastMasterCard.propTypes = {}

export default ToastMasterCard
