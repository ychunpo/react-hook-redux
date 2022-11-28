import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, {
  useState, useEffect, useMemo, useCallback
} from 'react';
import {
  Box, Button, Stack, Typography
} from '@mui/material';
import { ListFunction } from '../components/ListFunction';

const ListAppUseCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  // very slow function
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? '#002f6c' : '#F8EFBA',
      color: '#a4a4a4',
    }
  }, [dark])

  useEffect(() => {
    console.log('useCallback - Theme Change')
  }, [themeStyle])

  const changeHandler = e => {
    setNumber(e.target.value)
  }

  const changeTheme = () => {
    setDark(prevDark => !prevDark)
  }

  return (
    <Box sx={{ p: 2 }}
      style={themeStyle}
    >
      <Box>
        <Typography
          variant='h6'
          textAlign='center'
        >
          Function - UseCallback
        </Typography>
        <Stack sx={{ p: 2 }}>
          <input
            style={{
              padding: '5px',
              margin: '0 auto'
            }}
            type='number'
            value={number}
            onChange={changeHandler}
          />
          <Box
            sx={{
              m: '0 auto',
              p: 2
            }}
          >
            <span>Result: </span>
            <ListFunction getItems={getItems} />
          </Box>
          <Button
            sx={{
              color: '#a4a4a4'
            }}
            variant='outlined'
            onClick={changeTheme}
          >
            Change Theme
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
export default ListAppUseCallback;
`.trim();

const ListAppUseCallbackCode = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}
export default ListAppUseCallbackCode;