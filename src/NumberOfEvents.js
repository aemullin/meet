import React, { Component } from 'react';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '32',
        infoText: ''
    }

    onInputChange = (event) => {
        const value = event.target.value;
        if (this.state.numberOfEvents < 1) {
            this.setState({
              numberOfEvents: value,
              infoText: 'Please enter a value from 1 to 32'
            });
          } else if (this.state.numberOfEvents > 32) {
            this.setState({
              numberOfEvents: value,
              infoText: 'Please enter a value from 1 to 32'
            })} else {
            return this.setState({
              numberOfEvents: value,
              infoText: ''
            });
        }
        this.props.updateNumberOfEvents(value);
    };
    
    render() {
        
        return(
            <div className='event-number'>
                <input type='number' className='number' value={this.state.numberOfEvents} onChange={this.onInputChange}></input><br/> 
                Number of events on page
                <ErrorAlert text={this.state.infoText} />
            </div>
        )
    }
};

export default NumberOfEvents;