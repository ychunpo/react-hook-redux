import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useCallback, memo } from "react";
import {
  Box, Button, Stack, Typography
} from '@mui/material';

const Example1 = () => {
  const [count, setCount] = useState(0);
  console.log("re-render parent component");

  const resetCount = useCallback(() => {
    console.log("useCallback component")
    setCount(0);
  }, []);

  return (
    <Box sx={{ p: 1 }}>
      <Typography
        variant="h6"
        textAlign="center"
      >
        Example: 1
      </Typography>
      <Stack sx={{ p: 1, gap: 1 }}>
        <Typography
          textAlign='center'
        >
          總數: {count}
        </Typography>
        <Button
          sx={{
            m: '0 auto',
            color: 'blue',
          }}
          variant='raised'
          onClick={() => setCount((count) => count + 1)}
        >
          增加
        </Button>
        <Child reset={resetCount} />
      </Stack>
    </Box>
  );
};

const Child = memo(({ reset }) => {
  console.log("re-render child component.");

  return (
    <Stack sx={{ p: 1, gap: 1 }}>
      <Typography
        textAlign='center'
      >
        子組件 - 重新開始計算
      </Typography>
      <Button
        sx={{
          m: '0 auto',
          color: 'blue',
        }}
        variant='raised'
        onClick={reset}
      >
        重設
      </Button>
    </Stack>
  );
});
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