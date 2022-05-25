
import React, { Component } from 'react';
import {ErrorAlert} from './alert';

class NumberOfEvents extends Component {
	
  render() {
    return (
      <div className="NumberOfEvents">
				<br></br>
				<p>Number of Events</p>
				<input
        type="number"
        className="numberOfEvents"
				value={this.props.numberOfEvents}
				onChange ={(event) => this.props.updateNumberOfEvents(event)}
      />
			 <ErrorAlert id='errorAlert' text={this.props.errorText} />
  </div>
    );
  }
}

export default NumberOfEvents;