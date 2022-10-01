import './App.css';
import ScheduleSelector from 'react-schedule-selector'
import React from "react";

// Main application
class App extends React.Component {

  // Hardcoded dates for the group availability
  hardcode1 = [new Date('1/1/22 9:00'), new Date('1/1/22 9:15'), new Date('1/1/22 9:30'), new Date('1/1/22 9:45'), new Date('1/1/22 10:00'), new Date('1/3/22 9:00'), new Date('1/3/22 9:15'), new Date('1/3/22 9:30'), new Date('1/3/22 9:45'), new Date('1/3/22 10:00'), new Date('1/4/22 11:00'), new Date('1/4/22 11:30'), new Date('1/4/22 12:00')]

  hardcode2 = [new Date('1/1/22 9:00'), new Date('1/1/22 9:15'), new Date('1/1/22 9:30'), new Date('1/1/22 9:45'), new Date('1/4/22 11:30'), new Date('1/4/22 12:00')]

  hardcode3 = [new Date('1/1/22 9:00'),  new Date('1/1/22 9:30'), new Date('1/1/22 9:45')]

  // Initial State
  state = { schedule : []}

  // Handle the change in state
  handleChange = async newSchedule => {
    await this.setState({ schedule: newSchedule })
  }

  // Make the group availability side read-only
  doNothing = () => {
  }

  render() {
    return (<div className="container">
              <div className="relative">
                {/* Left side individual availabilities */}
                <span>Your Availabilities</span>
                <div className="overlap">
                  {/* Use Schedule Selector package */}
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
                    startDate="1/1/22"
                  />
                </div>
              </div>
              {/* Right side group availabilities, we overlapped components to give gradient to the timeslots */}
              <span>Group Availabilities</span>
              <div className="relative">
                <div className="overlap" >
                  <ScheduleSelector
                    selection={this.hardcode1}
                    numDays={5}
                    minTime={9}
                    maxTime={13}
                    hourlyChunks={4}
                    onChange={this.doNothing}
                    unselectedColor='rgba(255,0,0,0)'
                    selectedColor='rgba(0,135,62,0.2)'
                    hoveredColor='rgba(255,0,0,0)'
                    timeFormat='h:mm A'
                    startDate="1/1/22"
                  />
                </div>
                <div className="overlap" >
                  <ScheduleSelector
                    selection={this.hardcode2}
                    numDays={5}
                    minTime={9}
                    maxTime={13}
                    hourlyChunks={4}
                    onChange={this.doNothing}
                    unselectedColor='rgba(255,0,0,0)'
                    selectedColor='rgba(0,135,62,0.2)'
                    hoveredColor='rgba(255,0,0,0)'
                    timeFormat='h:mm A'
                    startDate="1/1/22"
                  />
                </div>
                <div className="overlap" >
                  <ScheduleSelector
                    selection={this.hardcode3}
                    numDays={5}
                    minTime={9}
                    maxTime={13}
                    hourlyChunks={4}
                    onChange={this.doNothing}
                    unselectedColor='rgba(255,0,0,0)'
                    selectedColor='rgba(0,135,62,0.2)'
                    hoveredColor='rgba(255,0,0,0)'
                    timeFormat='h:mm A'
                    startDate="1/1/22"
                  />
                </div>
                <div className="overlap">
                  <ScheduleSelector
                    selection={this.state.schedule}
                    numDays={5}
                    minTime={9}
                    maxTime={13}
                    hourlyChunks={4}
                    onChange={this.doNothing}
                    unselectedColor='rgba(255,0,0,0)'
                    selectedColor='rgba(0,135,62,0.2)'
                    hoveredColor='rgba(255,0,0,0)'
                    timeFormat='h:mm A'
                    startDate="1/1/22"
                  />
                </div>
              </div>
            </div>
    )
  }
}

export default App;