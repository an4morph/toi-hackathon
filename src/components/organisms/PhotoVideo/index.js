import React from 'react'
import { injectGlobal } from 'styled-components'
// import {  Header } from 'components'

injectGlobal`

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
        <form className="filter">
          <div className="type-block">
            <input type="checkbox" name="photo" onChange={this.handleTypeCheck} checked={this.state.photo} />Фото
            <input type="checkbox" name="video" onChange={this.handleTypeCheck} checked={this.state.video} />Видео
          </div>
          <div className="price-block">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} value={this.state.priceBefore} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} value={this.state.priceAfter} />
          </div>
        </form>
        <div className="results">
          {
            this.props.photoVideo.map((item, index) => {
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

PhotoVideo.propTypes = {}

export default PhotoVideo
