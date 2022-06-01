import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
// import { mockData } from './mock-data';
import EventGenre from './EventGenre';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 16
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       this.setState({ events, locations: extractLocations(events) });
  //     }
  //   });
  // }
  componentWillUnmount(){
    this.mounted = false;
  }
  
  updateEvents = async (location, numberOfEvents) => {
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
    const val =  event.target.value? parseInt(event.target.value) : 32;
      if (val < 0 || val > 32) {
       await this.setState({
          errorText: 'Select a number from 1 to 32'
        })
      } else {
        await this.setState({
          errorText: '',
          numberOfEvents: val
        })
        this.updateEvents(this.state.currentLocation, this.state.numberOfEvents)
      }
     
    }
    
    getData = () => {
      const {locations, events} = this.state;
      const data = locations.map((location)=>{
        const number = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift()
        return {city, number};
      })
      return data;
    };
   //this.props.updateNumberOfEvents(event.target.value);
 
 
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Meet App</h1>
        <CitySearch 
        infoText = {this.state.infoText} 
        locations={this.state.locations} 
        updateEvents={this.updateEvents} />
        <NumberOfEvents 
        errorText={this.state.errorText}
        numberOfEvents={this.state.numberOfEvents}
        updateNumberOfEvents={this.updateNumberOfEvents} />
        
        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="City" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="Number Of Events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;
