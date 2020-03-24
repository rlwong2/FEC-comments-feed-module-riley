import React from 'react';
import ReactDOM from 'react-dom';

import CommentsForm from '../client/src/components/CommentsForm.jsx';
import axiosCommentsGet from '../__mocks__/axiosCommentsGet.js';

jest.mock('axiosCommentsGet');

describe('CommentsForm Component', () => {
  describe('when rendered', () => {
    it('should fetch comments', () => {
      const getSpy = jest.spyOn(axiosCommentsGet, 'get');
      const appInstance = shallow(
        <App />
      );
      expect(getSpy).toBeCalled();
    });
  });
});