
import React, { Component } from 'react';

class NumberOfEvents extends Component {
	state = {
		infoText: "",
		suggestions: []
	};

	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion
		});
	}

  render() {
    return (
      <div className="NumberOfEvents">
				<br></br>
				<p>Number of Events</p>
				<input
        type="number"
        className="numberOfEvents"
				value={this.state.query}
				onChange ={(event) => this.props.updateNumberOfEvents(event)}
      />
  </div>
    );
  }
}

export default NumberOfEvents;