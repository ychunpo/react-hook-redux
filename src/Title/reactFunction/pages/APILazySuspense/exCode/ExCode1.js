import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { lazy, Suspense } from "react";
import {
  Box, Button, CircularProgress,
  Divider, Stack, Typography
} from "@mui/material";

const OtherButton = lazy(
  () => delayLazyLoading(import('./OtherButton'))
);

const Example1 = () => {

  const resetHandle = () => {
    window.location.reload();
  }

  return (
    <Box sx={{ m: 1, p: 1 }}>
      <Typography variant='h6' textAlign='center'>
        Example 1
      </Typography>
      <Typography textAlign='center' sx={{ p: 1 }}>
        Lazy loading
      </Typography>
      <Stack sx={{ p: 3, border: '2px solid blue' }}>
        <Suspense fallback={
          <Stack sx={{ m: '0 auto' }}>
            <CircularProgress />
          </Stack>
        }>
          <OtherButton />
        </Suspense>
      </Stack>
      <Divider sx={{ m: 1 }} />
      <Stack>
        <Button
          variant='outlined'
          onClick={resetHandle}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
};

function delayLazyLoading(component) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => component);
}
export default Example1;

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
`.trim();

const sample = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}
export default sample;