import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Other = () => {
  return (
    <div id='#other'>
      <Container maxWidth="md">
        <Typography variant="h4" component="div" p="24.8px 10px" gutterBottom>
          Other topic is under construction......
        </Typography>
        <br />
        <Box sx={{ bgcolor: 'white', color: 'white', height: '28.25vh', p: '30px 60px', align: 'center', borderRadius: 3, }} >
        </Box>
      </Container>
    </div>
  )
}

export default Other;