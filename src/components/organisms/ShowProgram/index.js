import React from 'react'
import { injectGlobal } from 'styled-components'
import { Link } from 'react-router-dom'
// import {  Header } from 'components'

injectGlobal`
  .filter {
    background-color: #ff5e4b;
    padding: 20px;
  }
`

class ShowProgram extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liveBand: true,
      vocalists: true,
      dancers: true,
      otherShows: true,
      priceBefore: '',
      priceAfter: '',
      filterShow: false,
    }
    this.handleShowTypeCheck = this.handleShowTypeCheck.bind(this)
    this.handlePriceBeforeChange = this.handlePriceBeforeChange.bind(this)
    this.handlePriceAfterChange = this.handlePriceAfterChange.bind(this)
  }

  componentWillMount() {
    // this.props.fetchShowProgramRequest()/
  }

  handleShowTypeCheck(e) {
    this.setState({ [`${e.target.name}`]: !this.state[`${e.target.name}`] })
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
        <div className="head-pead" onClick={e => this.setState({ filterShow: !this.state.filterShow })}>
          Шоу программа
          <span style={{ float: 'right', fontSize: '14px', marginTop: '14px', marginRight: '50px' }}>Фильтровать по &#9660;</span>
          <hr />
        </div>
        <form className={this.state.filterShow ? 'filter row' : 'filter-noShow'}>
          <div className="show-type-block col-xs-6">
            <p>Язык</p>
            <input type="checkbox" name="liveBand" onChange={this.handleShowTypeCheck} checked={this.state.liveBand} /><span style={{ marginRight: '20px' }}>Живая музыка</span>
            <input type="checkbox" name="vocalists" onChange={this.handleShowTypeCheck} checked={this.state.vocalists} /><span style={{ marginRight: '20px' }}>Певцы</span>
            <input type="checkbox" name="dancers" onChange={this.handleShowTypeCheck} checked={this.state.dancers} /><span style={{ marginRight: '20px' }}>Танцевальные группы</span>
            <input type="checkbox" name="otherShows" onChange={this.handleShowTypeCheck} checked={this.state.otherShows} /><span style={{ marginRight: '20px' }}>Разное</span>
          </div>
          <div className="price-block col-xs-6">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} />
          </div>
        </form>
        <div className="results">
          <div className='row'>
          {
            this.props.showProgram.map((item, index) => {
              return (<div key={index} className="cards pre col-lg-6">
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
                      {item.type}
                    </p>
                    <p>
                        Цена за вечер: {item.price} $
                      </p>
                    <p>
                        Телефон: {item.phone}
                    </p>
                  </div>
                  <Link to={{
                    pathname: '/showPage',
                    state: item,
                  }}
                  ><button>Перейти к описанию</button></Link>
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

ShowProgram.propTypes = {}

export default ShowProgram
