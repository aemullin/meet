import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    })
    test('display event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });
    test('display event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });
    test('display event location', () => {
        expect(EventWrapper.find('.event-location')).toHaveLength(1);
    });
    test('display event date and time', () => {
        expect(EventWrapper.find('.date-time')).toHaveLength(1);
    });
    test('display button to show event detail', () => {
        expect(EventWrapper.find('.display-details')).toHaveLength(1);
    });
    test('display details when button clicked', () => {
        EventWrapper.setState({
            collapsed: true,
        });
        EventWrapper.find('.display-details').simulate('click');
        expect(EventWrapper.state("collapsed")).toBe(false);
    });
    test('hide details when button is clicked', () => {
        EventWrapper.setState({
            collapsed: false,
        });
        EventWrapper.find('.hide-details').simulate('click');
        expect(EventWrapper.state("collapsed")).toBe(true);
    });
});