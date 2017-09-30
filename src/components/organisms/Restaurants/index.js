import React from 'react'
import { injectGlobal } from 'styled-components'
// import { Filter } from 'components'

injectGlobal`
  .filter {
    background-color: #ff5e4b;
    padding: 20px;
  }
`

class Restaurants extends React.Component {
  constructor(props) {
    super(props)
    this.state = { restaurantName: '', capacity: '' }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ restaurantName: e.target.value })
  }

  handleCapacityChange(e) {
    this.setState({ capacity: e.target.value })
  }

  render() {
    return (
      <div className="block">
        <form className="filter">
          <p>Имя ресторана</p>
          <input placeholder="имя ресторана" onChange={this.handleNameChange} />
          <p>Количество гостей</p>
          <input placeholder="количество гостей" onChange={this.handleCapacityChange} />
        </form>
      </div>
    )
  }
}

Restaurants.propTypes = {}

export default Restaurants
