import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div></div>;
  }
}
export default Event;
import Event from './Event'; // in src/EventList.js
import Event from '../Event'; // in src/__tests__/EventList.test.js