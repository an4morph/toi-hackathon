import {call, put, take, fork} from 'redux-saga/effects'
import axios from 'axios'
import {fetchItemSuccess} from './actions'

export function* fetchItem(id) {
  const apiResponse = yield call(
    axios.get,
    'link'+id
  )
  yield put(fetchItemSuccess(apiResponse.data))
}


export function* fetchItemRequest() {
  while (true) {
    const {id} = yield take('FETCH_ITEM_REQUEST')
    yield call(fetchItem, id)
  }
}

export default function* () {
  yield fork(fetchItemRequest)
}
