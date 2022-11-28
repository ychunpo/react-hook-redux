import React from 'react';
import styled from 'styled-components';

const UCContainer = styled.div`
height: 84vh;
top: 50%;
`

const UnderConstruction = () => {
  return (
    <UCContainer>
      <h1>This page is under construction......</h1>
    </UCContainer>
  )
}

export default UnderConstruction;