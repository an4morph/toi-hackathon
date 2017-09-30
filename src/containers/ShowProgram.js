import { connect } from 'react-redux'
import { fetchShowRequest } from 'store/actions'
import { ShowProgram } from 'components'

export const mapStateToProps = state => ({
  shows: state.showProgram
})

export const mapDispatchToProps = (dispatch) => ({
  onShow: () => dispatch(fetchShowProgramRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProgram)
