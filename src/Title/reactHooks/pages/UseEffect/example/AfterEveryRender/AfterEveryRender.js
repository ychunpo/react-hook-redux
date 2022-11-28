import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const AfterEveryRender = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('render');
  });

  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Typography
        variant='h6'
        textAlign='center'
      >
        After Every Render
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        sx={{
          gap: 1
        }}
      >
        <Typography
          sx={{
            m: '0 auto',
          }}
        >
          You clicked {count} times
        </Typography>
        <Button
          variant='outlined'
          onClick={() => setCount(count + 1)}
        >
          Click me
        </Button>
      </Box>
    </Box>
  )
}
export default AfterEveryRender;