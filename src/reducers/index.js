import { 
  CREATE_EVENT, 
  UPDATE_EVENT, 
  DELETE_EVENT, 
  SHOW_DAY_EVENTS,
  SHOW_UPDATE_FORM
} from '../actions'

const initialState = {
  events: [],
  showUpdateForm: false,
  updateId: undefined,
  showDayEvents: false,
  dayDate: undefined
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          action.event
        ]
      }
    case UPDATE_EVENT:
      return {
        events: state.events.map((event, index) => 
          index === Number(action.id) ? action.event : event
        )
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event, index) =>
          index !== Number(action.id)
        ),
        showUpdateForm: false
      }
    case SHOW_DAY_EVENTS:
      return {
        ...state,
        showUpdateForm: false,
        showDayEvents: true,
        dayDate: action.date
      }
    case SHOW_UPDATE_FORM:
      return {
        ...state,
        showDayEvents: false,
        showUpdateForm: true,
        updateId: action.id
      }
    default:
      return state
  }
}

export default eventReducer