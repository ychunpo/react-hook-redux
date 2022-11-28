import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function ComB(props) {
  const onButtonClick = () => {
    props.setStateA(props.stateB);
  }

  const onResetButtonClick = () => {
    props.setStateB("B");
  };

  return (
    <Box>
      <Typography
        sx={{ color: 'primary.main' }}
        textAlign='center'
      >
        B 組件
      </Typography>
      <Typography
        textAlign='center'
      >
        {props.stateB}
      </Typography>
      <Box
        display='flex'
        justifyContent='center'
        gap={5}
      >
        <Button
          variant='outlined'
          onClick={onButtonClick}
        >
          A 變為 B
        </Button>
        <Button
          variant='outlined'
          onClick={onResetButtonClick}
        >
          還原為 B
        </Button>
      </Box>
    </Box>
  )
}