import React from 'react';
import App from '../client/src/App'
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

describe('Test to check Jest', () => {
  it('1 plus 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('Renders components in DOM', () => {
  test('Renders comments', () => {
    const {}
  })
})