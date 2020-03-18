import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import svg from 'react-inlinesvg';

import img from '../the1975thumb.jpg';
import addIcon from './person-add-outline.svg';


const ArtistPanel = styled.div`
  display: block;
  width: 120;
  height: 250;
  position: absolute;
  top: 0;
  left: 0;
`

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  background-image: url(${img});
  background-position: 50% 50%;
  background-size: cover;
`

const ArtistName = styled.div`
  width: 100%;
  font-size: 13px;
  margin: 6px 0 0;
`

const ClickyBar = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  color: #999;
  font-size: 11px;
`

const Followers = styled.div`
  width: 50%;
`

const Reposts = styled.div`
  width: 50%;
`
const Follow = styled.button`
  min-width: 25px;
  background-color: #f50;
  border-color: #f50;
  color: #fff;
  font-size: 11px;
  padding: 2px 9px 2px 8 px;
  margin: 0px;
  height: 22px;
  line-height: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  cursor: pointer;
  white-space: nowrap;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  text-align: center;
  vertical-align: baseline;
  box-sizing: border-box;
`

const Artist = (props) => (
  <ArtistPanel>
    <Avatar>
    </Avatar>
    <ArtistName>the1975</ArtistName>
    <ClickyBar>
    <Followers>981K</Followers>
    <Reposts>136</Reposts>
    </ClickyBar>
    <Follow><svg src={addIcon} width="11px" height="11px" fill="#ffffff" stroke="#ffffff" viewBox="0 0 11 11" />Follow</Follow>
  </ArtistPanel>
)

export default Artist;