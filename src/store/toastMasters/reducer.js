const toastMasters = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOASTMASTERS_SUCCESS':
      return state.concat(action.payload.response)

    case 'TOASTMASTERS_FILTER':
        return state.filter(toastMasters => toastMasters.count === action.count)


    default:
      return state
  }
}

export default toastMasters
