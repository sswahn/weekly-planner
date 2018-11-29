import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/DayEvents.css'

class DayEvents extends Component {
  render() {
    const { events, dayDate } = this.props
    return (
      <div className="DayEvents">
        <h2>Events scheduled for {dayDate}</h2>
        {events.length === 0 ? <div></div> : 
          events.filter(event => event.event_date === dayDate).map((data, index) =>
            <div key={index} id={index} className={data.event_type}> 
              <h3>{data.event_name}</h3>
              <span>Date: </span>
              <time dateTime={data.event_date}>{data.event_date}</time>
              <span>Start time: </span>
              <time dateTime={data.event_begin}>{data.event_begin}</time>
              <span>End time: </span>
              <time dateTime={data.event_end}>{data.event_end}</time>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  dayDate: state.dayDate
})

export default connect(mapStateToProps)(DayEvents)