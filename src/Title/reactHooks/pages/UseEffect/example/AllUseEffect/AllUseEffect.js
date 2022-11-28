import React, { useEffect, useState } from 'react';
import {
  Box, Button, ButtonGroup,
  Typography
} from '@mui/material';

let timer = null;

function AppHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - componentDidMount " + count);
    if (count === 10
      || count === 20
      || count === 30
      || count === 40) {
      clearInterval(timer);
    }
  }, [count]);

  useEffect(() => {
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      console.log("useEffect - componentWillUnmount");
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        p: 1
      }}
    >
      <Typography
        variant='h6'
        textAlign='center'
      >
        Continues, Mounted, Will Unmount
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
            p: 1
          }}
        >Count: {count}</Typography>
        <ButtonGroup variant="outlined"
          aria-label="outlined primary button group"
          sx={{
            m: '0 auto'
          }}
        >
          <Button variant="outlined" color="success"
            onClick={() => clearInterval(timer)}
          >
            Stop
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
export default AppHook;