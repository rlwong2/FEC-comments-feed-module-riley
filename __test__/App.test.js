import React from 'react';
import App from '../client/src/App';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';

import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Test to check Jest', () => {
  it('1 plus 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('Renders components in DOM', () => {
  test('Renders comments', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.lengthOf(1);
  })
});