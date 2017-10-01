import React from 'react'
import { injectGlobal } from 'styled-components'
// import {  Header } from 'components'

injectGlobal`
.kekek{
  width:350px;
  height:250px;
}
`

class PhotoVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: false,
      video: false,
      priceBefore: '',
      priceAfter: '',
    }
    this.handleTypeCheck = this.handleTypeCheck.bind(this)
    this.handlePriceBeforeChange = this.handlePriceBeforeChange.bind(this)
    this.handlePriceAfterChange = this.handlePriceAfterChange.bind(this)
  }

  componentWillMount() {
    // this.props.fetchPhotoVideoRequest()
  }

  handleTypeCheck(e) {
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
        <div className="head-pead" onClick={e => this.setState({ filterShow: !this.state.filterShow })}>querySelector('query')
          Фото/Видео
          <span style={{ float: 'right', fontSize: '14px', marginTop: '14px', marginRight: '50px' }}>Фильтровать по &#9660;</span>
          <hr />
        </div>
        <form className={this.state.filterShow ? 'filter row' : 'filter-noShow'}>
          <div className="type-block col-xs-6">
            <p>Тип съемки</p>
            <input type="checkbox" name="photo" onChange={this.handleTypeCheck} checked={this.state.photo} /><span style={{ marginRight: '20px' }}>Фото</span>
            <input type="checkbox" name="video" onChange={this.handleTypeCheck} checked={this.state.video} /><span style={{ marginRight: '20px' }}>Видео</span>
          </div>
          <div className="price-block col-xs-6">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} value={this.state.priceBefore} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} value={this.state.priceAfter} />
          </div>
        </form>
        <div className="results">
        <div className='row'>
          {
            this.props.photoVideo.map((item, index) => {
              return (<div className="cards keks col-lg-6" key={index}>
                <img className='kekkek' src={item.photo} alt="" />
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
                      Фотограф
                    </p>
                    <p>
                      Сумма за съемку: {item.price} $
                    </p>
                    <p>
                      Телефон: {item.phone}
                    </p>
                  </div>
                  <button>Перейти к описанию</button>
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

PhotoVideo.propTypes = {}

export default PhotoVideo
