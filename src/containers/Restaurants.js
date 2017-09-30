import { connect } from 'react-redux';
import { fetchResRequest } from 'store/actions';
import { Restaurants }

export const mapDispatchToProps = {
  fetchResRequest: fetchResRequest
}

export const mapStateToProps = state => ({
  restaurants: state.restaurants
})


export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
