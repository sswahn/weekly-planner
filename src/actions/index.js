
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

export const SHOW_DAY_EVENTS = 'SHOW_DAY_EVENTS'
export const showDayEvents = date => ({
  type: SHOW_DAY_EVENTS,
  date
})

export const SHOW_UPDATE_FORM = 'SHOW_UPDATE_FORM'
export const showUpdateForm = id => ({
  type: SHOW_UPDATE_FORM,
  id
})