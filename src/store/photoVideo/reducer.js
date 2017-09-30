const photoVideo = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PHOTOVIDEO_SUCCESS':
      return state.concat(action.payload.response)

    case 'PHOTOVIDEO_FILTER':
        return state.filter(res => res.count === action.count)

    default:
      return state
  }
}

export default photoVideo
