import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { slowFunction } from '../components/slowFunction';
import '../../scss/slow_app.scss';

const SlowAppNoUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const doubleNumber = slowFunction(number);

  const themeStyle = {
    backgroundColor: dark ? '#2c3e50' : '#ecf0f1',
    color: dark ? '#ecf0f1' : '#2c3e50'
  }

  const changeTheme = () => {
    setDark(prevDark => !prevDark)
  }

  const changeHandler = e => {
    setNumber(e.target.value)
  }

  return (
    <Box
      className='slow-example-container'
      style={themeStyle}
    >
      <Box className='slow-wrapper'>
        <Box>
          <Typography
            variant='h6'
            textAlign='center'
          >
            Function - no useMemo
          </Typography>
          <Box
            textAlign='center'
            sx={{
              p: 2,
            }}
          >
            <Typography>
              Number is {number}
            </Typography>
            <input
              style={themeStyle}
              className='slow-input'
              type='number'
              value={number}
              onChange={changeHandler}
            />
            <Typography>
              Result: {doubleNumber}
            </Typography>
          </Box>
          <Box display='flex' justifyContent='center'>
            <Button
              className='slow-btn'
              variant='outlined'
              onClick={changeTheme}
            >
              Change Theme
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default SlowAppNoUseMemo;
`.trim();

const SlowAppNoUseMemoCode = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default SlowAppNoUseMemoCode;