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
                <h1 className="summary">{event.summary}</h1>
                <h2 className="event-location">{event.location}</h2>
                <p className = "date-time">{event.start.dateTime}</p>
                {!this.state.collapsed && (
                <div
                    className={`extra-details ${
                    this.state.collapsed ? "hide" : "show"
                    }`}
                >
                    <h3>About the event:</h3>
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