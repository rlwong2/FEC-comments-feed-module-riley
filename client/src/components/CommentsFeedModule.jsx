import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';

import Artist from './Artist.jsx';
import Song from './Song.jsx';
import Comments from './Comments.jsx';
import LikeBar from './LikeBar.jsx';
import CommentForm from './CommentForm.jsx';

const AppBody = styled.div`
  max-width: 850px;
  min-width: 650px;
  color: #000;
  margin: 20px;
  padding: 0;
  display: block;
  border-right: 1px solid #f2f2f2;
`

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url("https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg");
`

const Left = styled.div`
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  margin-top: 110px;
  padding: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`

const Right = styled.div`
  font: 12px/1.3em Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  margin-top: 120px;
  padding: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 140px;
  right: 0;
  width: 100vw;
  max-width: 710px;
`

class CommentsFeedModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      song: {},
      comments: [],
      commentInput: '',
      url: 'http://localhost:3005/'
    }
    this.getSong = this.getSong.bind(this);
    this.getArtist = this.getArtist.bind(this);
    this.getComments = this.getComments.bind(this);
    this.choosePort = this.choosePort.bind(this);
  }

  componentDidMount() {
    this.choosePort();
    this.getSong();
    this.getArtist();
  }

  choosePort() {
    let local = false; // choose localhost or EC2

    if (!local) {
      this.setState({
        url: 'http://3.14.6.132:3005/'
      })
    } else {
      this.setState({
        url: 'http://localhost:3005/'
      })
    }
  }

  getSong() {
    axios.get(`${this.state.url}song`)
    .then((result) => {
      // console.log(result)
      this.setState({
        song: result.data
      })
    })
  }

  getArtist() {
    axios.get(`${this.state.url}artist`)
    .then((result) => {
      // console.log(result)
      let obj = result.data;
      // console.log(obj.followers_count)
      obj.followers_count = obj.followers_count.toString().slice(0, -3).concat('K')
      this.setState({
        artist: obj
      })
    })
  }

  getComments() {
    axios.get(`${url}comments`)
    .then((result) => {
      // console.log(result)
      this.setState({
        comments: result.data
      })
    })
  }

  render() {
    return (<AppBody>
      <LikeBar song={this.state.song} />
      <Left>
        <Artist artist={this.state.artist} />
      </Left>
      <Right>
        <Song song={this.state.song} />
        <Comments url={this.state.url} getComments={this.getComments} />
      </Right>
    </AppBody>)
  }
}

export default CommentsFeedModule;