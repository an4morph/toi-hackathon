const showProgram = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SHOWPROGRAM_SUCCESS':
      return state.concat(action.payload.response)

    default:
      return state
  }
}

export default showProgram
