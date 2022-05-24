import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { mockData } from './mock-data';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 7
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  componentWillUnmount(){
    this.mounted = false;
  }
  
  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        if(this.mounted){
          this.setState({
            events: locationEvents.slice(0, numberOfEvents),
            currentLocation: location
          });        
        }
    });
  }

  updateNumberOfEvents = async (event) => {
    const value = event.target.value? parseInt(event.target.value) : 32;
    if (this.mounted())
    {

      if (value < 0 || value > 32) {
        this.setState({
          errorText: 'Select a number from 1 to 32'
        })
      } else {
        this.props.updateNumberOfEvents(value);
        this.setState({
          errorText: ''
        })
      }
    }
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents)

    }
    
   //this.props.updateNumberOfEvents(event.target.value);
 
 
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
      
      </div>
    );
  }
}
export default App;
