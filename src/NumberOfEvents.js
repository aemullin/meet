import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '32',
    }

    onInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfEvents: event.target.value
        });
    };
    
    render() {
        
        return(
            <div className='event-number'>
                <p> change number of events</p><span><input type='number' className='number' value={this.state.numberOfEvents} onChange={this.onInputChange}></input></span>
            </div>
        )
    }
};

export default NumberOfEvents;