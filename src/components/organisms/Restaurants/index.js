import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  .filter {
    background-color: #fff!important;
    margin-left: 50px;
    padding: 20px;
  }
  input {
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
  .capacity-block, .name-block, .price-block{
    display: inline-block;
  }
  .price-block {
    margin-top: 20px;
    align-items: flex-start;
    display: flex;
  }
  .results {
    background-color: #ffaa77;
  }
  .cards{
    font-family:open-sans;
    display:flex;
    width:600px;
    height:300px;
  }
  .cards h3{
    font-size:26px;
  }
  .cards img{
    padding-right:40px;
    width:370px;
    height:300px;
  }
  .res-decription{
    width:300px;
    font-size:14px;
  }
  .res-decription img{
    width:13px;
    height:13px;
    padding-right:20px;
  }
  button{
    padding:5px 30px 5px 30px;
  }
  .kek{
    padding-top:10px;
    padding-bottom:10px;
  }
  .head-pead {
    display: block;
  }
  .filter-noShow {
    display: none;
  }
  .head-pead {
    cursor: pointer;
    font-size: 22px;
    font-style: normal!important;
    font-weight: 600;
    font-family: Arial;
    margin-left: 50px;
  }
  .head-pead hr {
    border: 1px solid rgba(0,0,0,.5);
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
      filterShow: false,
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

  componentWillMount() {
    this.props.fetchResRequest()
  }

  filterItems(data, state) {
    return data.filter((item) => {
      return item.name.toLowerCase().indexOf(state.restaurantName) !== -1
    })
  }

  render() {
    console.log(this.state.filterShow)
    return (
      <div className="block">
        <div className="head-pead" onClick={e => this.setState({ filterShow: !this.state.filterShow })}>
          Рестораны
          <span style={{ float: 'right', fontSize: '14px', marginTop: '14px', marginRight: '50px' }}>Фильтровать по &#9660;</span>
          <hr />
        </div>
        <form className={this.state.filterShow ? 'filter row' : 'filter-noShow'}>
          <div className="name-block col-xs-4">
            <p>Имя ресторана</p>
            <input placeholder="имя ресторана" onChange={this.handleNameChange} />
          </div>
          <div className="capacity-block col-xs-4">
            <p>Количество гостей</p>
            <select onChange={this.handleCapacityChange}>
              <option>Любое</option>
              <option>100</option>
              <option>200</option>
              <option>300</option>
              <option>400</option>
              <option>500</option>
            </select>
          </div>
          <div className="price-block col-xs-4">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} />
          </div>
        </form>
        <div className="results">
          {
            this.filterItems(this.props.restaurants, this.state).map((item, index) => {
              return (
                <div className="cards">
                  <img src="nophoto.png" alt="" />
                  <div className="res-decription">
                    <h3>Золотой Дракон</h3>
                    <div className='reviews-content-card-star-rt'>
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                    </div>
                    <div className="kek">
                      <p>
                        Кухня: Национальнаяб Европейская
                      </p>
                      <p>
                        Сумма чека на человека: 1000 сом
                      </p>
                      <p>
                        Вместимость: 100 чел
                      </p>
                    </div>
                    <button>Перейти к описанию</button>
                    <div className='reviews-content-card-star crs'>
                      <img src="many_icons1.svg" alt="" />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

Restaurants.propTypes = {}

export default Restaurants
