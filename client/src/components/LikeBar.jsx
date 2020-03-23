import React from 'react';
import Moment from 'moment';
import styled from 'styled-components';
import svg from 'react-inlinesvg';

import { TiHeart, TiArrowLoop } from 'react-icons/ti';
import { FaShareSquare } from 'react-icons/fa';
import { MdPlaylistPlay, MdPlayArrow } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';

const LikeBarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 33px;
  width: inherit;
  margin: 0;
  padding: 0;
  font-weight: 100;
  font-size: 14px;
  line-height: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  align-items: baseline;
  padding-bottom: 5px;
  border-bottom: 1px solid #f2f2f2;
`

const ButtonsLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 400px;
`
const InfoRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  color: #999;
  vertical-align: center;
  line-height: 16px;
  width: 150px;
`

const Info = styled.p`
  font-size: 12px;
`

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 26px;
  margin: 0 3px;
  padding: 2px 11px 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  color: #333;
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  vertical-align: center;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #999;
  }
`

const ShareButton = styled(Button)`
  font-size: 11px;
`

const ButtonText = styled.span`
  font-size: 12px;
`

class LikeBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playCount: 0,
      likes: 0,
      reposts: 0
    }
  }

  componentDidMount() {
    this.setState({
      playCount: this.props.song.play_count,
      likes: this.props.song.likes_count,
      reposts: this.props.song.repost_count
    })
  }

  render() {
    return (<LikeBarBlock>
      <ButtonsLeft>
        <Button id="heart"><TiHeart /><ButtonText> Like</ButtonText></Button>
        <Button id="repost"><TiArrowLoop /><ButtonText> Repost</ButtonText></Button>
        <ShareButton id="share"><FaShareSquare /><ButtonText> Share</ButtonText></ShareButton>
        <Button id="nextup"><MdPlaylistPlay /><ButtonText> Add to Next Up</ButtonText></Button>
        <Button id="menu"><GoThreeBars /><ButtonText> More</ButtonText></Button>
      </ButtonsLeft>
      <InfoRight>
        <InfoDiv><MdPlayArrow /> <Info>{ this.props.song.play_count }</Info></InfoDiv>
        <InfoDiv><TiHeart /> <Info>{ this.props.song.likes_count }</Info></InfoDiv>
        <InfoDiv><TiArrowLoop /> <Info>{ this.props.song.repost_count }</Info></InfoDiv>
      </InfoRight>
    </LikeBarBlock>)
  }
}


export default LikeBar;