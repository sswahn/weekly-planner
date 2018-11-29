import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../actions'
import '../styles/CreateEvent.css'

class CreateEvent extends Component {
  constructor(props) {
    super(props)
    this.isTimeSlotAvailable = this.isTimeSlotAvailable.bind(this)
    this.handleCreateEvent = this.handleCreateEvent.bind(this)
  }
  isTimeSlotAvailable(data) {
    return (this.props.events.filter(existing =>
      (data.event_date === existing.event_date) &&
      ((data.event_begin >= existing.event_begin && 
      data.event_begin < existing.event_end) ||
      (data.event_end > existing.event_begin && 
      data.event_end < existing.event_end))
    ).length === 0)
  }
  handleCreateEvent(event) {
    event.preventDefault()
    const data = {
      event_name: event.target[0].value,
      event_date: event.target[1].value,
      event_begin: event.target[2].value,
      event_end: event.target[3].value,
      event_type: event.target[4].value
    }
    if (!this.isTimeSlotAvailable(data)) {
      return alert('Sorry, selected time slot is unavailable')
    }
    this.props.dispatch(createEvent(data))
  }
  render() {
    return (
      <div className="CreateEvent">
        <h1>Create Event</h1>
        <form onSubmit={this.handleCreateEvent}>
          <div>
            <label htmlFor="event-name">Event:</label>
            <input id="event-name" type="text" name="event_name" required />
          </div>
          <div>
            <label htmlFor="event-date">Date:</label>
            <input id="event-date" type="date" name="event_date" required />
          </div>
          <div>
            <label htmlFor="event-begin">Event begin (AM/PM):</label>
            <input id="event-begin" type="time" name="event_begin" required defaultValue={
              (new Date()).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})
            } />
          </div>
          <div>
            <label htmlFor="event-end">Event end (AM/PM):</label>
            <input id="event-end" type="time" name="event_end" required defaultValue={
              ((new Date()).getHours() + 1) + ':' + (new Date()).getMinutes()
            } />
          </div>
          <div>
            <label htmlFor="event-type">Event type:</label>
            <select id="event-type" defaultValue="default">
              <option value="default"> -- Select an option -- </option>
              <option value="work">Work related</option>
              <option value="party">Party related</option>
              <option value="hospital">Meds related</option>
            </select> 
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    events: state.events
})

export default connect(mapStateToProps)(CreateEvent)