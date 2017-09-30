import {call, put, take, fork} from 'redux-saga/effects'
import axios from 'axios'
import {fetchPhotoVideoSuccess} from './actions'


export function* fetchPhotoVideo() {
  const apiResponse = yield call(
    axios.get,
    'http://localhost:8000/api/v1/photovideo/'
  )
  yield put(fetchPhotoVideoSuccess(apiResponse.data))
}

export function* fetchPhotoVideoRequest() {
  while (true) {
    const {} = yield take('FETCH_PHOTOVIDEO_REQUEST')
    yield call(fetchPhotoVideo)
  }
}

export default function* () {
  yield fork(fetchPhotoVideoRequest)
}
