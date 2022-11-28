import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Child2 from './Child2';

const Father2 = () => {
  const [parentCount, setParentCount] = useState(0);

  const getChildCount = (value) => {
    setParentCount(value);
  }
  return (
    <Box display='flex' alignItems='center'>
      <Box bgcolor='orange' sx={{ p: 1 }}>
        <Typography textAlign='center'>
          父組件(子組件傳送來的數字) :  {parentCount}
        </Typography>
      </Box>
      <Child2 getCount={getChildCount} />
    </Box>
  )
}
export default Father2;