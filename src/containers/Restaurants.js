import React from 'react'
import { connect } from 'react-redux';
import { fetchResRequest } from 'store/actions';
import { Restaurants } from 'components'

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)


class RestaurantsContainer extends React.Component {


  componentWillMount() {
    console.log('kek')
    fetchResRequest()
  }

  render() {
    const {restaurants} = this.props
    return <Restaurants {...{restaurants}}/>
  }
}

const mapDispatchToProps = {
  fetchResRequest: fetchResRequest
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
