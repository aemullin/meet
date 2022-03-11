import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import{WarningAlert} from './alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events:[],
    locations: [],
    numberOfEvents: 32,
    location: 'all',
    offlineText: '',
    showWelcomeScreen: undefined
  };
  
async componentDidMount() {
  this.mounted = true;
  const accessToken = localStorage.getItem('access_token');
  const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  this.setState({ showWelcomeScreen: !(code || isTokenValid) });
  if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
           events: events.slice(0, this.state.numberOfEvents), 
           locations: extractLocations(events) 
        });
      }
    });
  }
  if (!navigator.onLine){
    this.setState({
      offlineText: 'You are not connected to the internet, events may not be up to date'
    });
  } else {
    this.setState({
      offlineText:''
    });
  }
}

  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents: numberOfEvents,
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = location === 'all' ?
        events :
        events.filter((event) => event.location === location);
      const eventNumberFilter =
        eventCount > locationEvents.length ? locationEvents : locationEvents.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: eventNumberFilter,
        });
      }
    });
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        <div className="title">
          <a className='title-link' href='https://aemullin.github.io/meet/'><h1>Meet</h1></a>
        </div><br/>
        <WarningAlert text={this.state.offlineText}/>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents updateNumberOfEvents={(number) => {this.updateNumberOfEvents(number)}} />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;
