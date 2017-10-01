export function fetchPhotoVideoRequest() {
  return {
    type: 'FETCH_PHOTOVIDEO_REQUEST'
  }
}
export function fetchPhotoVideoSuccess(response) {
  return {
    type: 'FETCH_PHOTOVIDEO_SUCCESS',
    payload: {response}
  }
}
