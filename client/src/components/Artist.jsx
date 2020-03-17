import React from 'react';
import styled from 'styled-components';
import img from '../the1975thumb.jpg';

const ArtistPanel = styled.div`
  display: block;
  width: 120;
  height: 250;
  position: absolute;
  top: 0;
  left: 0;
`

const Avatar = styled.div`
  width: 120;
  height: 120;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  background-image: url(${img});
  background-position: 50% 50%;
`

const ArtistName = styled.div`
  width: 100%
`

const Followers = styled.div`
  width: 50%
`

const Reposts = styled.div`
  width: 50%
`

const Artist = (props) => (
  <ArtistPanel>
    <Avatar style="">
    </Avatar>
    <ArtistName>the1975</ArtistName>
    <Followers>981K</Followers>
    <Reposts>136</Reposts>

  </ArtistPanel>
)

export default Artist;