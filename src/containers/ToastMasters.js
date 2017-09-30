import { connect } from 'react-redux'
import { fetchToastMastersRequest } from 'store/actions'
import { ToastMasters } from 'components'

export const mapStateToProps = state => ({
  toastMasters: state.toastMaster
})

export const mapDispatchToProps = (dispatch) => ({
  fetchToastMastersRequest: () => dispatch(fetchToastMastersRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToastMasters)
