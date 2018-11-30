import React, { Component } from 'react'
import { connect } from 'react-redux'
import UpdateEvent from './UpdateEvent'
import DayEvents from './DayEvents'

class DisplayPanel extends Component {
  render() {
    const { events, showUpdateForm, showDayEvents } = this.props
    return (
      <div>
        {events.length === 0 ? <div></div> :
          <div>
            {showDayEvents ? <DayEvents /> : <div></div>}
            {showUpdateForm === true ? <UpdateEvent /> : <div></div>}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  showUpdateForm: state.showUpdateForm,
  showDayEvents: state.showDayEvents
})

export default connect(mapStateToProps)(DisplayPanel)