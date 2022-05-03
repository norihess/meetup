
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
				onChange ={(evt) => this.props.updateNumberOfEvents(evt)}
      />
			{/* <ul className="suggestions">
				{this.state.suggestions.map((suggestion) => (
					<li
						key={suggestion}
						onClick={() => this.handleItemClicked(suggestion)}
					>{suggestion}</li>
				))}
			
			</ul> */}
  </div>
    );
  }
}

export default NumberOfEvents;