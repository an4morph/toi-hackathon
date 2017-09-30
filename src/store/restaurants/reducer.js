const restaurants = (state = [], action, payload) => {
  switch (action.type) {
    case 'FETCH_RES_SUCCESS':
      return state.concat(action.payload.data)

    case 'RES_NAME_FILTER':
      return state.filter(res => res.name === action.name)

    default:
      return state
  }
}

export default restaurants
