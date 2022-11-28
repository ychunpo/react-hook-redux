import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const OnceTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Once');
    setCount(count + 1);
  }, [])

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
        Example: Once Render
      </Typography>
      <Typography
        textAlign='center'
      >
        ***useEffect run once***
      </Typography>
      <Typography
        textAlign='center'
      >
        Count Number: {count}
      </Typography>
    </Box>
  )
}
export default OnceTime;