import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow (<NumberOfEvents updateNumberOfEvents={new App().updateNumberOfEvents}/>);
	});

	test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

	test('renders number input correctly', () => {
		const query = NumberOfEventsWrapper.state('numberOfEvents');
		expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(query);
	});

});