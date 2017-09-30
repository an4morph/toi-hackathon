const item = (state = [], action, payload) => {
  switch (action.type) {
    case 'CART_ADD':
      return state.concat(action.payload.response)

    case 'CART_DELETE':
      return state.filter(cart => cart.id !== action.payload.response.id)

    default:
      return state
  }
}

export default item
