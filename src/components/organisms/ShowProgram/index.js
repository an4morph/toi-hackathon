import React from 'react'
import { injectGlobal } from 'styled-components'
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
    this.state = { showName: '', capacity: '' }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ showName: e.target.value })
  }

  handlePriceBeforeChange(e) {
    this.setState({ priceBefore: e.target.value })
  }

  handlePriceAfterChange(e) {
    this.setState({ priceAfter: e.target.value })
  }

  componentWillMount() {
    this.props.fetchShowProgramRequest()
  }

  render() {
    return (
      <div className="block">
        <form className="filter">
          <p>Название шоу группы итд</p>
          <input placeholder="название" onChange={this.handleNameChange} />
          <p>Еще какая-то фигня</p>
          <input placeholder="еще какая-то фигня" onChange={this.handleCapacityChange} />
        </form>
      </div>
    )
  }
}

ShowProgram.propTypes = {}

export default ShowProgram
