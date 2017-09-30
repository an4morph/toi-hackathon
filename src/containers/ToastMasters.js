import { connect } from 'react-redux'
import { fetchToastMasterRequest } from 'store/actions'
import { ToastMasters } from 'components'

export const mapStateToProps = state => ({
  tamadas: state.toastMaster
})

export const mapDispatchToProps = (dispatch) => ({
  onFetchToastMaster: () => dispatch(fetchToastMastersRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToastMasters)
