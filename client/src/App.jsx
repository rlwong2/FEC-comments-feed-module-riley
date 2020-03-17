import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';
import Artist from './components/Artist.jsx';
import Song from './components/Song.jsx';
import Comments from './components/Comments.jsx';

const AppBody = styled.div`
  overflow-y: scroll;
  background: #f2f2f2;
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
  display: block;
`

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
    console.log(this.state)
  }

  getSong() {
    axios.get('http://localhost:3000/song')
    .then((result) => {
      console.log(result)
      this.setState({
        song: result.data
      })
    })
  }

  getArtist() {
    axios.get('http://localhost:3000/artist')
    .then((result) => {
      console.log(result)
      this.setState({
        artist: result.data
      })
    })
  }

  getComments() {
    axios.get('http://localhost:3000/comments')
    .then((result) => {
      console.log(result)
      this.setState({
        comments: result.data
      })
    })
  }

  render() {
    return (<AppBody>
      <Artist />
      <Song />
      <Comments />
    </AppBody>)
  }
}

ReactDOM.render(<App />, document.getElementById('App'));