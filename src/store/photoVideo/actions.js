export function fetchPhotoVideoRequest() {
  return {
    type: 'FETCH_PHOTOVIDEO_REQUEST'
  }
}
export function fetchPhotoSVideouccess(response) {
  return {
    type: 'FETCH_PHOTOVIDEO_SUCCESS',
    payload: {response}
  }
}
