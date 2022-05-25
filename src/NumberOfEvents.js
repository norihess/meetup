
import React, { Component } from 'react';
import {ErrorAlert} from './alert';

class NumberOfEvents extends Component {
	state = {
		infoText: "",
		// suggestions: []
	};
	
	// handleItemClicked = (suggestion) => {
	// 	this.setState({
	// 		query: suggestion
	// 	});
	// }

  render() {
    return (
      <div className="NumberOfEvents">
				 <ErrorAlert id='errorAlert' text={this.state.errorText} />
				<br></br>
				<p>Number of Events</p>
				<input
        type="number"
        className="numberOfEvents"
				value={this.props.numberOfEvents}
				onChange ={(event) => this.props.updateNumberOfEvents(event)}
      />
  </div>
    );
  }
}

export default NumberOfEvents;