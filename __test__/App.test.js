import React from 'react';
import App from '../client/src/components/App.jsx';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';

import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




describe('Test to check Jest', () => {
  test('1 plus 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });
});

// describe('Renders components in DOM', () => {
//   test('Renders comments', async () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(AppBody)).toHaveLength(1);
//   })
// });

jest.mock('../client/src/components/Song', () => () => <div id="mockSong">mockSong</div>)
jest.mock('../client/src/components/Artist', () => () => <div id="mockArtist">mockArtist</div>)
jest.mock('../client/src/components/Comments', () => () => <div id="mockComments">mockComments</div>)
jest.mock('../client/src/components/LikeBar', () => () => <div id="mockLikeBar">mockLikeBar</div>)


describe('App Component', () => {
  it('Should return Song component', () => {

    const wrapper = mount(<App />)
    expect(wrapper.find('#mockSong').length).toEqual(1)
  })

  it('Should return Artist component', () => {

    const wrapper = mount(<App />)
    expect(wrapper.find('#mockArtist').length).toEqual(1)
  })

  it('Should return Comments component', () => {

    const wrapper = mount(<App />)
    expect(wrapper.find('#mockComments').length).toEqual(1)
  })

  it('Should return LikeBar component', () => {

    const wrapper = mount(<App />)
    expect(wrapper.find('#mockLikeBar').length).toEqual(1)
  })
})