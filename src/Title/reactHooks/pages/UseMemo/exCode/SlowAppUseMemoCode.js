import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { slowFunction } from '../components/slowFunction';
import '../../scss/slow_app.scss';

const SlowAppUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  const doubleNumber = useMemo(() =>
    slowFunction(number), [number]
  );

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? '#2c3e50' : '#ecf0f1',
      color: dark ? '#ecf0f1' : '#2c3e50'
    }
  }, [dark])

  useEffect(() => {
    console.log('useMemo - Theme Change')
  }, [themeStyle])

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
            Function - useMemo
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
export default SlowAppUseMemo;
`.trim();

const SlowAppUseMemoCode = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default SlowAppUseMemoCode;