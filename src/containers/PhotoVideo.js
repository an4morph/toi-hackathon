import { connect } from 'react-redux'
import { fetchPhotoVideoRequest } from 'store/actions'
import { PhotoVideo } from 'components'

export const mapStateToProps = state => ({
  // photoVideo: state.photoVideo
  photoVideo:
  [
      {
          "id": 1,
          "name": "Ала-Тооd",
          "capacity": "500",
          "sum": 3,
          "kitchen": 2,
          "additional_service": 6,
          "description": "У нас крутой ресторан",
          "address": "г.Бишкек Асанбай",
          "phone": "+996550778133",
          "photo": "http://localhost:8000/media/photos/restaurant/JUu2nuYUtlk.jpg"
      },
      {
          "id": 2,
          "name": "Нава",
          "capacity": "100",
          "sum": 1,
          "kitchen": 1,
          "additional_service": 4,
          "description": "Супер ресторан",
          "address": "г.Бишкек",
          "phone": "+996558728259",
          "photo": "http://localhost:8000/media/photos/restaurant/JUu2nuYUtlk_nC8xlxQ.jpg"
      }
  ]
})

export const mapDispatchToProps = (dispatch) => ({
  fetchPhotoVideoRequest: () => dispatch(fetchPhotoVideoRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoVideo)
