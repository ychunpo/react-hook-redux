import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const Child2 = (props) => {
  const { getCount } = props;
  const [count, setCount] = useState(0);

  const addCount = (value) => {
    setCount(value);
    getCount(value);
  }
  return (
    <Box
      display='flex'
      justifyContent='center'
    >
      <Typography sx={{ p: '6px 12px' }}>
        子組件數字：{count}
      </Typography>
      <Button
        variant='outlined'
        onClick={() => addCount(count + 1)}
      >
        添加
      </Button>
    </Box>
  )
}
export default Child2;