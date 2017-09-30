import {call, put, take, fork} from 'redux-saga/effects'
import axios from 'axios'
import {fetchResSuccess} from './actions'

export function* fetchRes() {
  const apiResponse = yield call(
    axios.get,
    'http://127.0.0.1:8000/api/v1/restaurants/'
  )
  yield put(fetchResSuccess(apiResponse.data))
}

export function* fetchResRequest() {
  while (true) {
    const {} = yield take('FETCH_RES_REQUEST')
    yield call(fetchRes)
  }
}

export default function* () {
  yield fork(fetchResRequest)
}
