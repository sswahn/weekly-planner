import React from 'react'
import CreateEvent from '../containers/CreateEvent'
import CurrentEvents from '../containers/CurrentEvents'
import DisplayPanel from '../containers/DisplayPanel'
import '../styles/App.css'

const App = () =>
  <div className="App">
    <CreateEvent />
    <CurrentEvents />
    <DisplayPanel />
  </div>

export default App