import React from 'react'
import { injectGlobal } from 'styled-components'
// import { RestarauntResult } from 'components'

injectGlobal`
  .filter {
    background-color: #ff5e4b;
    padding: 20px;
  }
  input {
    border: none;
    padding: 3px;
    font-size: 14px;
  }
  .price-block input {
    width: 70px;
  }
  p {
    padding: 0;
    margin: 0;
  }
  select {
    height: 20px;
  }
  .capacity-block, .name-block {
    display: inline-block;
    margin-right: 100px;
  }
  .price-block {
    margin-top: 20px;
    align-items: flex-end;
    display: flex;
  }
  .results {
    background-color: #ffaa77;
  }
`

class Restaurants extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantName: '',
      capacity: 'Любое',
      priceBefore: '',
      priceAfter: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCapacityChange = this.handleCapacityChange.bind(this)
    this.handlePriceBeforeChange = this.handlePriceBeforeChange.bind(this)
    this.handlePriceAfterChange = this.handlePriceAfterChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ restaurantName: e.target.value })
  }

  handleCapacityChange(e) {
    this.setState({ capacity: e.target.value })
  }

  handlePriceBeforeChange(e) {
    this.setState({ priceBefore: e.target.value })
  }

  handlePriceAfterChange(e) {
    this.setState({ priceAfter: e.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <div className="block">
        <form className="filter">
          <div className="name-block">
            <p>Имя ресторана</p>
            <input placeholder="имя ресторана" onChange={this.handleNameChange} />
          </div>
          <div className="capacity-block">
            <p>Количество гостей</p>
            <select onChange={this.handleCapacityChange}>
              <option>Любое</option>
              <option>до 50</option>
              <option>100</option>
              <option>500 и более</option>
            </select>
          </div>
          <div className="price-block">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} />
          </div>
        </form>
        <div className="results">
          {
            this.props.restaurants.map((item, index) => {
              return (<div key={index}>
                <h3>{item.name}</h3>
                тут картинка
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}

Restaurants.propTypes = {}

export default Restaurants
