import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow (<NumberOfEvents />);
	});

	test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

	test('renders a list of suggestions', () => {
		expect(NumberOfEventsWrapper.find('.suggestions')).toHaveLength(1);
	});

	test('renders number input correctly', () => {
		const query = NumberOfEventsWrapper.state('numberOfEvents');
		expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(query);
	});

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: "32" });
    NumberOfEventsWrapper.find(".numberOfEvents").simulate("change", {
      target: { value: "13" },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual("13");
  });


});