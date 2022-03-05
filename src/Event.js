import React, { Component } from "react";

class Event extends Component {
    state = {
        collapsed: true
    };

    onDetailsClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const {event} = this.props;
        return (        
            <div className="event">
                <h2 className="summary">{event.summary}</h2>
                <h3 className="event-location">{event.location}</h3>
                <b>Date and Time: </b>
                <p className = "date-time">{event.start.dateTime}</p>
                {!this.state.collapsed && (
                <div
                    className={`extra-details ${
                    this.state.collapsed ? "hide" : "show"
                    }`}
                >
                    <h4>About the event:</h4>
                    <a href={event.htmlLink} rel="noreferrer" target="_blank">
                    View on google Calendar
                    </a>
                    <p className="event-description">{event.description}</p>
                </div>
                )}
                <button className={`details-button ${this.state.collapsed ? "display" : "hide"}-details`} onClick={this.onDetailsClick}>{this.state.collapsed ? "Show Details" : "Hide-Details"}</button>
            </div>
        )
    }
}
export default Event;