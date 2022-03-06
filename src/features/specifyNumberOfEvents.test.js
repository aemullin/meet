import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { shallow, mount } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents'
import App from '../App'

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')

defineFeature(feature, test => {
    test('When a user hasn’t specified a number, 32 is the default', ({ given, when, then }) => {
        let NumberOfEventsWrapper
        given('a user opens the events page', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        });
        
        when('a user hasn’t set how many events they would like to view', () => {

        });
        
  
        then('the user will see 32 events', () => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual('32');
        });
    });
  
    test('User can change the number of events they want to see', ({ given, when, then }) => {

        let AppWrapper
        given('a user would like to see more or less events than 32', () => {
            AppWrapper = mount(<App />);
            
        });
        
        let EventNumberWrapper
        when('a user sets a filter', () => {
            EventNumberWrapper = AppWrapper.find(NumberOfEvents);
            EventNumberWrapper.find(".number").at(0).simulate("change", { target: { value: 5 } });
        });
        
  
        then('the user will see more or less than 32 events', () => {
            expect(AppWrapper.state("numberOfEvents")).toBe(5);
        });
    });
});