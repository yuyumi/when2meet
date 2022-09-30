import './App.css';
import ScheduleSelector from 'react-schedule-selector'
import React from "react";

class App extends React.Component {
  state = { schedule : [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  doNothing = newSchedule => {
  }

  render() {
    return (<div class="container">
      <span>Your Availabilities</span>
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={9}
        maxTime={13}
        hourlyChunks={4}
        onChange={this.handleChange}
        unselectedColor='rgba(255,0,0,0.3)'
        selectedColor='rgba(0,135,62,1)'
        hoveredColor='#AADB1E'
        timeFormat='h:mm A'
      />
      <span>Group Availabilities</span>
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={9}
        maxTime={13}
        hourlyChunks={4}
        onChange={this.doNothing}
        unselectedColor='rgba(255,0,0,0.3)'
        selectedColor='rgba(0,135,62,1)'
        hoveredColor='rgba(255,0,0,0.3)'
        timeFormat='h:mm A'
      />
    </div>
    )
  }
}

export default App;