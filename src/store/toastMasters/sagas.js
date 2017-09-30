import {call, put, take, fork} from 'redux-saga/effects'
import axios from 'axios'
import {fetchToastMastersSuccess} from './actions'

export function* fetchToastMasters() {
  const apiResponse = yield call(
    axios.get,
    'http://localhost:8000/api/v1/toastmaster/'
  )
  yield put(fetchToastMastersSuccess(apiResponse.data))
}



export function* fetchToastMastersRequest() {
  while (true) {
    const {} = yield take('FETCH_TOASTMASTERS_REQUEST')
    yield call(fetchToastMasters)
  }
}

export default function* () {
  yield fork(fetchToastMastersRequest)
}
