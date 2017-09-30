import React from 'react'
import { injectGlobal } from 'styled-components'
// import {  Header } from 'components'

injectGlobal`

`

class ToastMasters extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showName: '', capacity: '' }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ showName: e.target.value })
  }

  handleCapacityChange(e) {
    this.setState({ capacity: e.target.value })
  }

  render() {
    return (
      <div className="block">
        <form className="filter">
          <p>Имя тамады</p>
          <input placeholder="имя" onChange={this.handleNameChange} />
          <p>Еще какая-то фигня</p>
          <input placeholder="еще какая-то фигня" onChange={this.handleCapacityChange} />
        </form>
      </div>
    )
  }
}

ToastMasters.propTypes = {}

export default ToastMasters
