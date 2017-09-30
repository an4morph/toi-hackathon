import { connect } from 'react-redux'
import { fetchPhotoVideoRequest } from 'store/actions'
import { PhotoVideo } from 'components'

export const mapStateToProps = state => ({
  photos: state.photoVideo
})

export const mapDispatchToProps = (dispatch) => ({
  onPhoto: () => dispatch(fetchPhotoVideoRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoVideo)
