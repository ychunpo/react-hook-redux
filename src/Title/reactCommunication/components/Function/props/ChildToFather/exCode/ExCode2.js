import React from 'react';
import PrismRender from '../../../../../../../frame/components/prism/PrismRender';

const code = `
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
`.trim();

const ExCode1 = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;