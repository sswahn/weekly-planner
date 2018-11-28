
export const CREATE_EVENT = 'CREATE_EVENT'
export const createEvent = event => ({
  type: CREATE_EVENT,
  event
})

export const UPDATE_EVENT = 'UPDATE_EVENT'
export const updateEvent = (event, id) => ({
  type: UPDATE_EVENT,
  event,
  id
})

export const DELETE_EVENT = 'DELETE_EVENT'
export const deleteEvent = id => ({
  type: DELETE_EVENT,
  id
})

export const TOGGLE_VIEW = 'TOGGLE_VIEW'
export const toggleView = view => ({
  type: TOGGLE_VIEW,
  view
})