import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEvent } from '../actions'
import '../styles/UpdateEvent.css'

class UpdateEvent extends Component {
  constructor(props) {
    super(props)
    this.isTimeSlotAvailable = this.isTimeSlotAvailable.bind(this)
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this)
  }
  isTimeSlotAvailable(data) {
    return (this.props.events.filter(existing =>
      !(data.event_date === existing.event_date &&
      data.event_begin === existing.event_begin &&
      data.event_end === existing.event_end) &&
      ((this.props.events.length > 1) && 
      (data.event_date === existing.event_date) &&
      ((data.event_begin >= existing.event_begin && 
      data.event_begin < existing.event_end) ||
      (data.event_end > existing.event_begin && 
      data.event_end < existing.event_end)))
    ).length === 0)
  }
  handleUpdateEvent(event) {
    event.preventDefault()
    const { dispatch, updateId } = this.props
    const data = {
      event_name: event.target[0].value,
      event_date: event.target[1].value,
      event_begin: event.target[2].value,
      event_end: event.target[3].value,
      event_type: event.target[4].value
    }
    if (!this.isTimeSlotAvailable(data)) {
      return alert('Sorry, selected time slot is unavailable.')
    }
    dispatch(updateEvent(data, updateId))
  }
  render() {
    const { events, updateId } = this.props
    return (
      <div className="UpdateEvent">
        <h2>Update Event</h2>
        {events.length === 0 ? <div></div> :
          <form onSubmit={this.handleUpdateEvent} key={updateId}>
            <div>
              <input id="event-name" type="text" name="event_name" required 
                defaultValue={events[updateId].event_name } />
            </div>
            <div>
              <input id="event-date" type="date" name="event_date" required 
                defaultValue={events[updateId].event_date} />
            </div>
            <div>
              <input id="event-begin" type="time" name="event_begin" required 
                defaultValue={events[updateId].event_begin} />
            </div>
            <div>
              <input id="event-end" type="time" name="event_end" required 
                defaultValue={events[updateId].event_end} />
            </div>
            <div>
              <select id="event-type" name="event_type" 
                defaultValue={events[updateId].event_type}>
                <option value="default"> -- Select an option -- </option>
                <option value="work">Work related</option>
                <option value="party">Party related</option>
                <option value="hospital">Doctor related</option>
              </select> 
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  updateId: state.updateId
})

export default connect(mapStateToProps)(UpdateEvent)