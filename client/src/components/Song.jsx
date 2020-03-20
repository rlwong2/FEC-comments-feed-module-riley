import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  font-size: 13px;
`

const Song = (props) => (
  <Description data-testid="description">
    <b>Release date: </b><br />
    {props.song.release_date}<br />
    <br />
    <b>C-line: </b><br />
    {props.song.c_line}<br />
  </Description>
)

export default Song;