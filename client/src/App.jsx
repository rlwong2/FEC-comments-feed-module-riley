import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';
import Artist from './components/Artist.jsx';
import Song from './components/Song.jsx';
import Comments from './components/Comments.jsx';
import LikeBar from './components/LikeBar.jsx'

const AppBody = styled.div`
  width: 670px;
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  color: #000;
  margin: 20px;
  padding: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`

const CommentFormBlock = styled.div`
  width: inherit;
  height: 40px;
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  background-color: #f2f2f2;
  border: 1px solid #e5e5e5;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 5px;
  align-items: stretch;
`

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url("https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg");
`

const CommentForm = styled.div`
  width: 630px;
  height: inherit;
`
const CommentInput = styled.input`
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  outline: none;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  width: 100%;
  margin: 7px 7px;
  padding-left: 9px;
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
  font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  margin-top: 120px;
  padding-left: 140px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      song: {},
      comments: [],
      commentInput: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getSong();
    this.getArtist();
    this.getComments();
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
      let obj = result.data;
      console.log(obj.followers_count)
      obj.followers_count = obj.followers_count.toString().slice(0, -3).concat('K')
      this.setState({
        artist: obj
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
    .catch((err) => {
      console.log('Error: getComments', err)
    })
  }

  handleInput(e) {
    this.setState({
      commentInput: e.target.value
    })

    if (e.key === 'Enter') {
      this.setState({
        commentInput: ''
      })
      this.handleSubmit(e)
    }
  }

  handleSubmit(e) {
    e.preventDefault();

      let newComment = {
        user_name: 'ZeldaXOXO',
        text: e.target.value
      }
      axios.post('/comments', newComment )
        .then((result) => {
          console.log('Success: Posted comment')
          this.getComments();
        })
        .catch((err) => {
          console.log('Error: Post comment:', err)
        })

  }

  render() {
    return (<AppBody>
      <CommentFormBlock>
        <UserAvatar /><CommentInput placeholder="Write a comment" value={ this.state.commentInput } onChange={ this.handleInput } onKeyPress={ this.handleInput } />
      </CommentFormBlock>
      <LikeBar song={this.state.song} />
      <Left>
        <Artist artist={this.state.artist} />
      </Left>
      <Right>
        <Song song={this.state.song} />
        <Comments comments={this.state.comments} />
      </Right>
    </AppBody>)
  }
}

ReactDOM.render(<App />, document.getElementById('App'));