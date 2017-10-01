import React from 'react'
import { injectGlobal } from 'styled-components'
import { Link } from 'react-router-dom'
// import {  Header } from 'components'

injectGlobal`
 .results{
   display: flex;
   height:auto;
   min-height:1000px;
   background-color:#fff;
 }
 .results h3{
   height:25px;
 }

 .pre{


   transition:all 1s;

 }
 .block{
   background-color:#fff;
 }
`

class ToastMasters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toastmasterName: '',
      priceBefore: '',
      priceAfter: '',
      kyrgyzLang: false,
      russianLang: false,
      englishLang: false,
      filterShow: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLanguageCheck = this.handleLanguageCheck.bind(this)
    this.handlePriceBeforeChange = this.handlePriceBeforeChange.bind(this)
    this.handlePriceAfterChange = this.handlePriceAfterChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ toastmasterName: e.target.value })
  }

  handleLanguageCheck(e) {
    this.setState({ [`${e.target.name}Lang`]: !this.state[`${e.target.name}Lang`] })
  }

  handlePriceBeforeChange(e) {
    this.setState({ priceBefore: e.target.value })
  }

  handlePriceAfterChange(e) {
    this.setState({ priceAfter: e.target.value })
  }

  componentWillMount() {
    // this.props.fetchToastMastersRequest()
  }

  filterItems(data, state) {
    return data.filter((item) => {
      return item.name.toLowerCase().indexOf(state.toastName) !== -1
    })
  }

  render() {
    return (
      <div className="block">
        <div className="head-pead" onClick={e => this.setState({ filterShow: !this.state.filterShow })}>
          Ведущие мероприятий
          <span style={{ float: 'right', fontSize: '14px', marginTop: '14px', marginRight: '50px' }}>Фильтровать по &#9660;</span>
          <hr />
        </div>
        <form className={this.state.filterShow ? 'filter row' : 'filter-noShow'}>
          <div className="name-block col-xs-4">
            <p>Имя тамады</p>
            <input onChange={this.handleNameChange} />
          </div>
          <div className="language-block col-xs-4">
            <p>Язык</p>
            <input type="checkbox" name="kyrgyz" onChange={this.handleLanguageCheck} checked={this.state.kyrgyzLang} />Кыргызский
            <input type="checkbox" name="russian" onChange={this.handleLanguageCheck} checked={this.state.russianLang} />Русский
            <input type="checkbox" name="english" onChange={this.handleLanguageCheck} checked={this.state.englishLang} />Английский
          </div>
          <div className="price-block col-xs-4">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} />
          </div>
        </form>
        <div className="results">
          <div className='row'>
          {
            this.props.toastMasters.map((item, index) => {
              return (<div key={index} className="cards pre col-lg-6 col-md-12 col-xs-12">
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
                        Ведущий мероприятий
                      </p>
                    <p>
                        Цена за вечер: {item.price} $
                      </p>
                    <p>
                        Телефон: {item.phone}
                    </p>
                  </div>
                  <Link to={{
                    pathname: '/toastPage',
                    state: item,
                  }}
                  >
                    <button>Перейти к описанию</button>
                  </Link>
                  <div className="reviews-content-card-star crs">
                    <img src="many_icons1.svg" alt="" />
                  </div>
                </div>
              </div>)
            })
          }
        </div>
       </div>
      </div>
    )
  }
}

ToastMasters.propTypes = {}

export default ToastMasters
