import React from 'react'
import { connect } from 'react-redux';
import { fetchResRequest } from 'store/actions';
import { Restaurants } from 'components'

const mapDispatchToProps = {
  fetchResRequest: fetchResRequest
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
