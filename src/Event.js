import React, { Component } from "react";

class Event extends Component {
  state = {
    show: "hidden",
    buttonText: "Show"
  }
  render() {
    const { event } = this.props;
    return <div>
     <i>{event.summary}</i> 
      < br/>
      {event.location}
      < br/>
      <button type="button" onClick={()=>
      {
        if(this.state.show === "hidden") 
        {
          this.setState({
            show: "",
            buttonText: "Hide"
          })
        }
        else {
        this.setState({
          show: "hidden",
          buttonText: "Show"
        })
      }
      }
      }>{this.state.buttonText}</button>
      <br />
      <p hidden={this.state.show}> {event.description} </p>
    <br /><br />
    </div>;
  }
}
export default Event;