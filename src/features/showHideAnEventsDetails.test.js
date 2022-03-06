import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        
        let AppWrapper
        given('a user is on the events page', () => {
            AppWrapper = mount(<App />);
            AppWrapper.update();
        });
        
        when('details have not been viewed', () => {
        });
        
  
        then('the event details will be hidden (collapsed)', () => {
            expect(AppWrapper.find(".extra-details")).toHaveLength(0);
        });
    });
  
    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper
        given('the user wants to learn more about an event', () => {
            AppWrapper = mount(<App/>)
        });
        
        when('a user clicks view details', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.details-button')).toHaveLength(2);
            AppWrapper.find('.details-button').at(0).simulate('click');
        });
        
  
        then('the event details will show (expand)', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(1);
        });
    });
  
  
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppWrapper
        given('a user wants to collapse expanded details', () => {
            AppWrapper = mount(<App/>);
        });
        
        when('a user clicks hide details', () => {
            AppWrapper.update();
            AppWrapper.find('.details-button').at(0).simulate('click');
            AppWrapper.find('.details-button').at(0).simulate('click');
        });
        
  
        then('the event details will be hidden (collapsed)', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(0);
        });
    });
});