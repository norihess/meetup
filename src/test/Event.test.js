import React from 'react';
import { mount } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  
	test('Simulate button click', async () => {
		const EventWrapper = mount(<Event event={{
			summary: "",
			location: "",
			description: ""	
		}}/>);
		EventWrapper.find('button').at(0).simulate('click');
		expect(EventWrapper.state('show')).toEqual("");
		expect(EventWrapper.state('buttonText')).toEqual("Hide");

		EventWrapper.find('button').at(0).simulate('click');
		expect(EventWrapper.state('show')).toEqual("hidden");
		expect(EventWrapper.state('buttonText')).toEqual("Show");

		EventWrapper.unmount();
	});

});
