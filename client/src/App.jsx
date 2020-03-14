import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      song: {},
      comments: []
    }
  }

  componentDidMount() {
    this.getSong();
    this.getArtist();
    this.getComments();
  }

  getSong() {

  }

  getArtist() {

  }

  getComments() {

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