import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { createContext } from "react";
import { Box, Stack, Typography } from '@mui/material';

const { Provider, Consumer } = createContext(null);

function Bar() {
  return (
    <Consumer>
      {color =>
        <Box sx={{ p: 1 }}>
          <Typography
            textAlign="center"
          >
            {color}
          </Typography>
        </Box>}
    </Consumer>
  )
}

function Foo() {
  return <Bar />;
}

function WithoutUseContext() {
  return (
    <Provider value={"grey"}>
      <Stack>
        <Typography
          textAlign="center"
        >
          沒用 useContext
        </Typography>
        <Foo />
      </Stack>
    </Provider>
  );
}
export default WithoutUseContext;
`.trim();

const WithoutUseContextCode = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default WithoutUseContextCode;