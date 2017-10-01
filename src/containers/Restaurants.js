import React from 'react'
import { connect } from 'react-redux'
import { fetchResRequest } from 'store/actions'
import { Restaurants } from 'components'

const mapDispatchToProps = {
  fetchResRequest,
}

const mapStateToProps = state => ({
  // restaurants: state.restaurants
  restaurants: [
    {
      id: 1,
      name: 'Ала-Тоо',
      capacity: '500',
      sum: 1000,
      kitchen: 2,
      additional_service: 6,
      description: 'У нас крутой ресторан',
      address: 'г.Бишкек Асанбай',
      phone: '+996550778133',
      photo: 'http://localhost:8000/media/photos/restaurant/JUu2nuYUtlk.jpg',
    },
    {
      id: 2,
      name: 'Нава',
      capacity: '100',
      sum: 800,
      kitchen: 1,
      additional_service: 4,
      description: 'Супер ресторан',
      address: 'г.Бишкек',
      phone: '+996558728259',
      photo: 'http://localhost:8000/media/photos/restaurant/JUu2nuYUtlk_nC8xlxQ.jpg',
    },
  ],


})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
