import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  font-size: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  line-height: 1.3em;
`

const Bold = styled.p`
  font-weight: 500;
`

const Song = (props) => (
  <Description data-testid="description">
    <Bold>Release date: </Bold>
    {props.song.release_date}
    <br />
    <Bold>C-line: </Bold>
    {props.song.c_line}
  </Description>
)

export default Song;