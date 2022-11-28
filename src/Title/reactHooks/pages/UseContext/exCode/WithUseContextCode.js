import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { createContext, useContext } from "react";
import { Box, Stack, Typography } from '@mui/material';

const colorContext = createContext("gray");

function Bar() {
  const color = useContext(colorContext);
  return (
    <Box sx={{ p: 1 }}>
      <Typography
        textAlign="center"
      >
        {color}
      </Typography>
    </Box>
  )
}

function Foo() {
  return <Bar />;
}

function WithUseContext() {
  return (
    <colorContext.Provider value={"red"}>
      <Stack>
        <Typography
          textAlign="center"
        >
          有用 useContext
        </Typography>
        <Foo />
      </Stack>
    </colorContext.Provider>
  );
}
export default WithUseContext;
`.trim();

const sample = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default sample;