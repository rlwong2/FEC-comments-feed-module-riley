import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import svg from 'react-inlinesvg';

import img from '../the1975thumb.jpg';
import { IoMdPeople } from 'react-icons/io';
import { MdPersonAdd, MdReportProblem } from 'react-icons/md';
import { GiSoundWaves } from 'react-icons/gi';


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

const Tracks = styled.div`
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
  vertical-align: center;
  box-sizing: border-box;
`

const Report = styled.div`
  height: 22px;
  text-align: left;
  vertial-align: bottom;
  font-size: 11px;
  font-weight: 100;
  margin-top: 30px;
  padding: 0;
`

const Artist = (props) => (
  <ArtistPanel>
    <Avatar>
    </Avatar>
    <ArtistName>{props.artist.name}</ArtistName>
    <ClickyBar>
    <Followers><IoMdPeople /> {props.artist.followers_count}</Followers>
    <Tracks><GiSoundWaves /> {props.artist.tracks_count}</Tracks>
    </ClickyBar>
    <Follow><MdPersonAdd />  Follow</Follow>
    <Report><MdReportProblem /> Report</Report>
  </ArtistPanel>
)

export default Artist;