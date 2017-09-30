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
    this.state = {
      liveBand: true,
      vocalists: true,
      dancers: true,
      otherShows: true,
      priceBefore: '',
      priceAfter: '',
    }
    this.handleShowTypeCheck = this.handleShowTypeCheck.bind(this)
    this.handlePriceBeforeChange = this.handlePriceBeforeChange.bind(this)
    this.handlePriceAfterChange = this.handlePriceAfterChange.bind(this)
  }

  componentWillMount() {
    this.props.fetchShowProgramRequest()
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
        <form className="filter">
          <div className="show-type-block">
            <p>Язык</p>
            <input type="checkbox" name="liveBand" onChange={this.handleShowTypeCheck} checked={this.state.liveBand} />Живая музыка
            <input type="checkbox" name="vocalists" onChange={this.handleShowTypeCheck} checked={this.state.vocalists} />Певцы
            <input type="checkbox" name="dancers" onChange={this.handleShowTypeCheck} checked={this.state.dancers} />Танцевальные группы
            <input type="checkbox" name="otherShows" onChange={this.handleShowTypeCheck} checked={this.state.otherShows} />Разное
          </div>
          <div className="price-block">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} />
          </div>
        </form>
      </div>
    )
  }
}

ShowProgram.propTypes = {}

export default ShowProgram
