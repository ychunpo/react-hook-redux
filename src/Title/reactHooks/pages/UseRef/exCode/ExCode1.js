import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import { useState, useRef, useEffect } from 'react';
import {
  Box, Button, Stack, Typography
} from '@mui/material';

function Example1() {
  const [count, setCount] = useState(0);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      console.log("useEffect was first run");
      return
    }
    console.log("useEffect was run");
  });

  return (
    <Box>
      <Typography
        variant='h6'
        textAlign='center'
      >
        Example: 1
      </Typography>
      <Stack sx={{ p: 2, gap: 2 }} >
        <Typography>
          Clicked {count} times
        </Typography>
        <Button
          variant='outlined'
          onClick={() => { setCount(count + 1) }}
        >
          Click Me
        </Button>
      </Stack>
    </Box >
  );
}
export default Example1;
`.trim();

const ExCode1 = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;