import './App.css';
import ScheduleSelector from 'react-schedule-selector'
import React from "react";

class Group extends React.Component {
  state = { schedule : [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render() {
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={9}
        maxTime={13}
        hourlyChunks={4}
        onChange={this.handleChange}
      />
    )
  }
}

export default Group;