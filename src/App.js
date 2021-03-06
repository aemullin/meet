import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from "./EventGenre";
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import{WarningAlert} from './Alert';
import WelcomeScreen from './WelcomeScreen';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

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

  updateNumberOfEvents = (eventCount) => {
    this.setState(
      {
        numberOfEvents: eventCount,
      },
      this.updateEvents(this.state.location, eventCount)
    );
  };

  updateEvents = (location, eventCount = this.state.eventCount) => {
    getEvents().then((events) => {
      const locationEvents = location === 'all' ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, numberOfEvents),
          numberOfEvents: eventCount,
          location: location,
        });
      }
    });
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

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    const { locations, numberOfEvents, events } = this.state;

    return (
      <div className="App">
        <div className="title">
          <a className='title-link' href='https://aemullin.github.io/meet/'><h1>Meet</h1></a>
        </div><br/>
        <WarningAlert text={this.state.offlineText}/>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={this.state.numberOfEvents}/>
        <div className='data-container'>
          <EventGenre className='event-genre data-object' events={events} />
          <ResponsiveContainer  className='graph data-object' height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;
