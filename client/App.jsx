import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist = {},
      song = {},
      comments = []
    }
  }

  render() {
    return (<div>
      <Artist />
      <Song />
      <Comments />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('App'));