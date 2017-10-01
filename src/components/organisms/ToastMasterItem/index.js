import React from 'react'

const ToastMasterItem = ({ key, item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      {/* <img src={item.src} /> */}
      <div className="description">
        <b>Владение языками: </b> бла-бла
        <br />
      Столько-то сом за вечер
      </div>
    </div>
  )
}

ToastMasterItem.propTypes = {}

export default ToastMasterItem
