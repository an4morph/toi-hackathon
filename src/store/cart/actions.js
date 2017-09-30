export function fetchItemRequest(id) {
  return {
    type: 'FETCH_ITEM_REQUEST',
    id
  }
}

export function fetchItemSuccess(response) {
  return {
    type: 'FETCH_ITEM_SUCCESS',
    payload: {
      response
    }
  }
}
