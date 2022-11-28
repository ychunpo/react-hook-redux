import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function ComA(props) {
  const onButtonClick = () => {
    props.setStateB(props.stateA);
  };

  const onResetButtonClick = () => {
    props.setStateA("A");
  };

  return (
    <Box>
      <Typography
        sx={{ color: 'primary.main' }}
        textAlign='center'
      >
        A 組件
      </Typography>
      <Typography
        textAlign='center'
      >
        {props.stateA}
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
          B 變為 A
        </Button>
        <Button
          variant='outlined'
          onClick={onResetButtonClick}
        >
          還原為 A
        </Button>
      </Box>
    </Box>
  )
}