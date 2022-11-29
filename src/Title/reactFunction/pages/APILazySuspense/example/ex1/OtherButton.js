import React, { useState } from 'react';
import {
  Box, Button, Stack, Typography
} from '@mui/material';

const OtherButton = () => {
  const [word, setWord] = useState('red');

  const clickHandle = () => {
    if (word === 'red') {
      setWord('green');
    } else {
      setWord('red');
    }
  }
  return (
    <Box sx={{ m: 1, border: '1px solid red' }}>
      <Stack sx={{ p: 2, gap: 1 }}>
        <Typography textAlign='center'>
          加載後組件
        </Typography>
        <Typography textAlign='center'>
          Word: {word}
        </Typography>
        <Button
          variant='contained'
          onClick={clickHandle}
        >
          Click
        </Button>
      </Stack>
    </Box>
  )
}
export default OtherButton;