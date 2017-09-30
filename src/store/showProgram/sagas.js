import {call, put, take, fork} from 'redux-saga/effects'
import axios from 'axios'
import {fetchShowProgramSuccess} from './actions'


export function* fetchShowProgram() {
  const apiResponse = yield call(
    axios.get,
    'http://localhost:8000/api/v1/showprogram/'
  )
  yield put(fetchShowProgramSuccess(apiResponse.data))
}

export function* fetchShowProgramRequest() {
  while (true) {
    const {} = yield take('FETCH_SHOWPROGRAM_REQUEST')
    yield call(fetchShowProgram)
  }
}

export default function* () {
  yield fork(fetchShowProgramRequest)
}
