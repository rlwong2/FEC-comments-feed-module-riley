import React from 'react';
import ReactDOM from 'react-dom';
import Song from '../Song.jsx';
import renderer from 'react-test-renderer';


it("Renders song module", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Song></Song>, div)
})