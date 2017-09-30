export function fetchToastMastersRequest() {
  return {
    type: 'FETCH_TOASTMASTERS_REQUEST'
  }
}

export function fetchToastMastersSuccess(response) {
  return {
    type: 'FETCH_TOASTMASTERS_SUCCESS',
    payload: {response}
  }
}
