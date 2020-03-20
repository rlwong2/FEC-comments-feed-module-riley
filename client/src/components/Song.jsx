import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  font-size: 14px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  line-height: 1.3em;
`

const Song = (props) => (
  <Description>
    <b>Release date: </b><br />
    {props.song.release_date}<br />
    <br />
    <b>C-line: </b><br />
    {props.song.c_line}<br />
  </Description>
)

export default Song;