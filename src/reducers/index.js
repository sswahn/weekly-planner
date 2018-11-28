import { 
  CREATE_EVENT, 
  UPDATE_EVENT, 
  DELETE_EVENT, 
  TOGGLE_VIEW
} from '../actions'

const initialState = {
  events: [],
  view: ''// set default view
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
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
        events: state.events.filter((event, index) =>
          index !== Number(action.id)
        )
      }
    case TOGGLE_VIEW:
      return {
        ...state,
        view: action.view
      }
    default:
      return state
  }
}

export default eventReducer