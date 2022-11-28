import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import Once from './example/Once';
import AfterEveryRender from './example/AfterEveryRender';
import OnPropsStateChange from './example/OnPropsStateChange';
import OnUnmount from './example/OnUnmount';
//import AppClass from './example/AppClass';
//import AppHook from './example/AppHook';
//import AppClassCode from './exCode/AppClassCode';
//import AppHookCode from './exCode/AppHookCode';
// import Example1 from './example/Example1';
// import Example2 from './example/Example2';
// import Example3 from './example/Example3';
// import Example4 from './example/Example4';
// import Example5 from './example/Example5';

const HookUseEffect = () => {
  return (
    <Container maxWidth="xl">
      <Box >
        <Box
          sx={{
            bgcolor: '#039be5'
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              p: 1,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              boxShadow: 2
            }}
          >
            useEffect
          </Typography>
        </Box>

        <div id='useEffect'>
          <div className='example-group'>
            <div>
              <Once />
              <AfterEveryRender />
              <OnPropsStateChange />
              <OnUnmount />
            </div>
            <div>

            </div>
          </div>

        </div>
      </Box>
    </Container>
  )
}

export default HookUseEffect;