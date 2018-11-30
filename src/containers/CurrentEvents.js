import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUpdateForm, deleteEvent, showDayEvents } from '../actions'
import '../styles/CurrentEvents.css'

class CurrentEvents extends Component {
  constructor(props) {
    super(props)
    this.showModifiers = this.showModifiers.bind(this)
    this.hideModifiers = this.hideModifiers.bind(this)
    this.determineDay = this.determineDay.bind(this)
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this)
    this.handleShowDayEvents = this.handleShowDayEvents.bind(this)
    this.handleShowUpdateForm = this.handleShowUpdateForm.bind(this)
  }
  showModifiers(event) {
    event.currentTarget.children[8].className = 'show'
  }
  hideModifiers(event) {
    event.currentTarget.children[8].className = 'hide'
  }
  determineDay(date) {
    const day = new Date(date)
    return day.getDay() + 1 === 6 || day.getDay() + 1 === 0
      ? 'Weekend' 
      : 'Weekday'
  }
  handleShowDayEvents(event) {
    const date = event.currentTarget
      .parentNode.children[2].textContent
    this.props.dispatch(showDayEvents(date))
  }
  handleShowUpdateForm(event) {
    const id = event.target.parentNode.id
    this.props.dispatch(showUpdateForm(id))
  }
  handleDeleteEvent(event) {
    if (window.confirm('Delete this event?')) {
      const id = event.target.parentNode.id
      this.props.dispatch(deleteEvent(id))
    }
  }
  render() {
    const { events } = this.props
    return (
      <div className="CurrentEvents">
        {events.length === 0 ? <div></div> :
          events.map((data, index) =>
            <div key={index} id={index} className={data.event_type} 
              onMouseEnter={this.showModifiers} 
              onMouseLeave={this.hideModifiers}> 
              <h3 onClick={this.handleShowDayEvents}>{data.event_name}</h3>
              <span>Date: </span>
              <time dateTime={data.event_date}>{data.event_date}</time>
              <span>Start time: </span>
              <time dateTime={data.event_begin}>{data.event_begin}</time>
              <span>End time: </span>
              <time dateTime={data.event_end}>{data.event_end}</time>
              <hr />
              <div className="hide" id={index}>
                <button onClick={this.handleShowUpdateForm}>Update</button>
                <button onClick={this.handleDeleteEvent}>Delete</button>
              </div>
              <span>{this.determineDay(data.event_date)}</span>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(CurrentEvents)