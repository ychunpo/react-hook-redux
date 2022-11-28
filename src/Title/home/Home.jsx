import React from 'react';
import { Box, Container } from '@mui/material';
import Overview from './Overview';

const Home = () => {

  return (
    <Container
      sx={{
        height: '86vh'
      }}
    >
      <Box>
        <Overview />
      </Box>
    </Container>
  )
}

export default Home;