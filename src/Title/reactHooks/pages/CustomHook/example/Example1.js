import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

function useCount() {
  // 公共程序放在內部實現
  let [count, setCount] = useState(0);
  const setMyCount = () => {
    setCount(count + 1)
  }
  // 只暴露外部需要的數據
  return [count, setMyCount];
}
// 在不同組件中使用不會共享同一份數據，都是獨立的一份
function Func1() {
  // setCount 為自定義hooks中返回的 setMyCount
  let [count, setCount] = useCount();
  return (
    <Stack
      align='center'
      sx={{ gap: 1 }}
    >
      Count 1: {count}
      <Button
        variant='outlined'
        onClick={() => { setCount() }}
      >
        更新 count 1
      </Button>
    </Stack>
  )
}

function Func2() {
  let [count, setCount] = useCount();
  return (
    <Stack
      align='center'
      sx={{ gap: 1 }}
    >
      Count 2: {count}
      <Button
        variant='outlined'
        onClick={() => { setCount() }}
      >
        更新 count 2
      </Button>
    </Stack>
  )
}

function Example1() {
  return (
    <Box>
      <Typography
        variant='h6'
        textAlign='center'
      >
        Example 1
      </Typography>
      <Box
        display='flex'
        justifyContent='center'
        sx={{
          gap: 3
        }}
      >
        <Func1 />
        <Func2 />
      </Box>
    </Box>
  )
}
export default Example1;