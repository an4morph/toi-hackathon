import React from 'react'
import { injectGlobal } from 'styled-components'
// import {  Header } from 'components'

injectGlobal`

`

class PhotoVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { photoManName: '', capacity: '' }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ photoManName: e.target.value })
  }

  handleCapacityChange(e) {
    this.setState({ capacity: e.target.value })
  }

  componentWillMount() {
    this.props.fetchPhotoVideoRequest()
  }

  render() {
    return (
      <div className="block">
        <form className="filter">
          <p>Имя фотографа</p>
          <input placeholder="имя" onChange={this.handleNameChange} />
          <p>Еще какая-то фигня</p>
          <input placeholder="еще какая-то фигня" onChange={this.handleCapacityChange} />
        </form>
      </div>
    )
  }
}

PhotoVideo.propTypes = {}

export default PhotoVideo
