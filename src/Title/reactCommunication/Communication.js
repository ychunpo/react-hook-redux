import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FunctionCommunication from './components/Function';
//import ClassCommunication from './components/Class';

const Communication = () => {
  return (
    <Container maxWidth="xl" sx={{ p: 1 }}>
      <Box>
        <Typography
          p={2}
          variant='h5'
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Function - Component Communication
        </Typography>
        <FunctionCommunication />
      </Box>
    </Container>
  )
}

export default Communication;