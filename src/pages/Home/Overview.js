import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Overview = () => {
  return (
    <div id='#overview'>
      <Container maxWidth="md">
        <Typography variant="h4" component="div" p="20px 10px" gutterBottom>React Reference - Overview</Typography>
        <Box sx={{
          bgcolor: '#33648f',
          color: 'white',
          height: '13vh',
          p: '30px 60px',
          align: 'center',
          borderRadius: 3,
        }} >
          <Typography variant="h6" component="div">
            The React Reference provides React information and practical techniques in example form,
            The purpose is to quickly aid in thinking and problem-solving.
          </Typography>
          <Typography variant="h6" component="div">
            All information is updated as continuously as possible.
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            The current version is 17.02.
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Overview;
