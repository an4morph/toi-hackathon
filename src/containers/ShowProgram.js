import { connect } from 'react-redux'
import { fetchShowProgramRequest } from 'store/actions'
import { ShowProgram } from 'components'

export const mapStateToProps = state => ({
  showProgram: state.showProgram
})

export const mapDispatchToProps = (dispatch) => ({
  fetchShowProgramRequest: () => dispatch(fetchShowProgramRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProgram)
