import React from 'react';
import Moment from 'moment';
import styled from 'styled-components';
import { FaCommentAlt } from 'react-icons/fa';
import CommentBlock from './CommentBlock.jsx';

const CommentTop = styled.div`
  margin-top: 20px;
  font-weight: 100;
  font-size: 14px;
  line-height: 1.3;
  color: #999;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 5px;
  margin-bottom: 18px;
`

const CommentFeed = styled.li`
  display: list-item;
  list-style: none;
`

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      shownComments: {},

    }
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments})
  }

  render() {
    return (
      <div>
        <CommentTop><FaCommentAlt /> {this.props.comments.length} comments</CommentTop>
        <CommentFeed>
          {this.props.comments.map((comment) => {
            return (
              <CommentBlock comment={comment} />
            )
          })}
        </CommentFeed>
      </div>
    )
  }
}


export default Comments;