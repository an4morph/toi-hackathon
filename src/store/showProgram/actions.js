
export function fetchShowProgramRequest() {
  return {
    type: 'FETCH_SHOWPROGRAM_REQUEST'
  }
}

export function fetchShowProgramSuccess(response) {
  return {
    type: 'FETCH_SHOWPROGRAM_SUCCESS',
    payload: {response}
  }
}
