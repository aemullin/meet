import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '32',
    }

    onInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfEvents: value,
        });
        this.props.updateNumberOfEvents(value);
    };
    
    render() {
        
        return(
            <div className='event-number'>
                <p> change number of events</p>
                <input type='number' className='number' value={this.state.numberOfEvents} onChange={this.onInputChange}></input>
            </div>
        )
    }
};

export default NumberOfEvents;