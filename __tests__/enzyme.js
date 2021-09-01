import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TestComponent from './_TestComponent.jsx';
import { beforeAll, expect, it } from '@jest/globals';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('_TestComponent', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<TestComponent />);
    });

    it('Renders a <h1> tag with some text inside', () => {
      expect(wrapper.type()).toEqual('h1');
      expect(wrapper.text()).toEqual('This is a test component!');
    });
  });
});
