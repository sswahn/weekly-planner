import React from 'react'
import CreateEvent from '../containers/CreateEvent'
import CurrentEvents from '../containers/CurrentEvents'
import '../styles/App.css'

const App = () =>
  <div className="App">
    <CreateEvent />
    <CurrentEvents />
  </div>

export default App