import { connect } from 'react-redux'
import { fetchPhotoVideoRequest } from 'store/actions'
import { PhotoVideo } from 'components'

export const mapStateToProps = state => ({
  photoVideo: state.photoVideo
})

export const mapDispatchToProps = (dispatch) => ({
  fetchPhotoVideoRequest: () => dispatch(fetchPhotoVideoRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoVideo)
