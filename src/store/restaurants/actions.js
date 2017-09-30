export function fetchResRequest() {
  return {
    type: 'FETCH_RES_REQUEST'
  }
}

export function fetchResSuccess(data) {
  return {
    type: 'FETCH_RES_SUCCESS',
    payload: {data}
  }
}
