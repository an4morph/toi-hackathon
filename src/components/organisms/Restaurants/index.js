import React from 'react'
import { injectGlobal } from 'styled-components'
import { Link } from 'react-router-dom'

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
    display:flex;
    width:650px;
    height:300px;
    margin:45px;
    margin-right:-100px;
  }
  .cards h3{
    font-size:26px;
  }
  .cards img{
    padding-right:40px;
    width:300px;
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
  .keks{
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
    // this.props.fetchResRequest()
  }

  filterItems(data, state) {
    return data.filter((item) => {
      return item.name.toLowerCase().indexOf(state.restaurantName) !== -1
    })
  }

  render() {
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
          <div className="row">
            {
            this.filterItems(this.props.restaurants, this.state).map((item, index) => {
              return (
                <div className="cards keks col-lg-6 col-md-12 col-xs-12" key={index}>
                  <img src={item.photo} alt="" />
                  <div className="res-decription">
                    <h3>{item.name}</h3>
                    <div className="reviews-content-card-star-rt">
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                      <img src="star.svg" alt="" />
                    </div>
                    <div className="kek">
                      <p>
                        Кухня: Национальная, Европейская
                      </p>
                      <p>
                        Сумма чека на человека: {item.sum} сом
                      </p>
                      <p>
                        Вместимость: {item.capacity} чел
                      </p>
                    </div>
                    <Link to={{
                      pathname: '/resPage',
                      state: item,
                    }}
                    ><button>Перейти к описанию</button></Link>
                    <div className="reviews-content-card-star crs">
                      <img src="many_icons1.svg" alt="" />
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

Restaurants.propTypes = {}

export default Restaurants
