import React from 'react'

const ShowCard = ({ ...props }) => {
  const item = props.location.state
  return (
    <div>
      <div className="show-card">
        <h2>{item.name}</h2>
        <img src={item.photo} alt="" />
        <p>{item.type}</p>
        <div className="show-contacts">
        Телефон: {item.phone}
        </div>
        <div className="show-desc">{item.description}</div>
      </div>
    </div>
  )
}

ShowCard.propTypes = {}

export default ShowCard
