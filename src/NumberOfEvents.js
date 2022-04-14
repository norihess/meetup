
import React, { Component } from 'react';

class NumberOfEvents extends Component {
	state = {
		NumberOfEvents : 32,
		infoText: "",
		suggestions: []
	};

	handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: "",
        infoText: "Please enter a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: "",
      });
    }
    // this.props.updateNumberOfEvents(event.target.value);
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
				onChange ={this.handleInputChanged}
      />
			<ul className="suggestions">
				{this.state.suggestions.map((suggestion) => (
					<li
						key={suggestion}
						onClick={() => this.handleItemClicked(suggestion)}
					>{suggestion}</li>
				))}
				<li>
					<b>See all Events</b>
				</li>
			</ul>
  </div>
    );
  }
}

export default NumberOfEvents;