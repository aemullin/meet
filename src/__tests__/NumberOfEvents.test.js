import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'

describe('<App /> component', () => {
    let EventNumberWrapper;
    beforeAll(() => {
    EventNumberWrapper = shallow(<NumberOfEvents />);
  });
    test('display number of events', () => {
        expect(EventNumberWrapper.find('.event-number')).toHaveLength(1);
   });
   test('display default number of events, 32', () => {
    expect(EventNumberWrapper.state('numberOfEvents')).toEqual('32');
   })
   test('display custum number of events when input is changed', () => {
       EventNumberWrapper.find('.number').simulate('change', {
           target: { value: '25'},
       });
       expect(EventNumberWrapper.state("numberOfEvents")).toEqual("25");
   })
  
});