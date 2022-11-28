import React, { useState, useMemo } from "react";
import { Box, Button, Typography } from '@mui/material';

const Example1 = () => {
  const [count, setCount] = useState(0);

  const memoizedValueOne = useMemo(() => {
    return Math.random();
  }, []);

  const memoizedValueTwo = () => {
    return Math.random();
  };

  const clickHandler = (e) => {
    setCount(count + 1);
  };

  return (
    <Box>
      <Typography
        textAlign='center'
        variant="h6"
      >
        Example: 1
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        sx={{ p: 2, gap: 1 }}
      >
        <Typography
          textAlign='center'
          sx={{
            color: 'red',
          }}
        >
          ***A use useMemo, B no useMemo***
        </Typography>
        <Typography>
          RandomA: {memoizedValueOne}
        </Typography>
        <Typography>
          RandomB: {memoizedValueTwo()}
        </Typography>
        <Typography>Count: {count}</Typography>
        <Box
          display='flex'
          justifyContent='center'
        >
          <Button
            variant='outlined'
            onClick={clickHandler}
          >
            Click
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Example1;