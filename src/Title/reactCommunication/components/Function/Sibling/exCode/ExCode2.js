import React from 'react';
import PrismRender from '../../../../../../frame/components/prism/PrismRender';

const code = `
iimport React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import ComA from './ComA';
import ComB from './ComB';

export default function Channel() {
  const [stateA, setStateA] = useState("A");
  const [stateB, setStateB] = useState("B");

  return (
    <Box>
      <ComA
        stateA={stateA}
        setStateB={setStateB}
        setStateA={setStateA}
      />
      <Divider sx={{ m: 1 }} />
      <ComB
        stateB={stateB}
        setStateA={setStateA}
        setStateB={setStateB}
      />
    </Box>
  )
}

import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function ComA(props) {
  const onButtonClick = () => {
    props.setStateB(props.stateA);
  };

  const onResetButtonClick = () => {
    props.setStateA("A");
  };

  return (
    <Box>
      <Typography
        sx={{ color: 'primary.main' }}
        textAlign='center'
      >
        A 組件
      </Typography>
      <Typography
        textAlign='center'
      >
        {props.stateA}
      </Typography>
      <Box
        display='flex'
        justifyContent='center'
        gap={5}
      >
        <Button
          variant='outlined'
          onClick={onButtonClick}
        >
          B 變為 A
        </Button>
        <Button
          variant='outlined'
          onClick={onResetButtonClick}
        >
          還原為 A
        </Button>
      </Box>
    </Box>
  )
}

import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function ComB(props) {
  const onButtonClick = () => {
    props.setStateA(props.stateB);
  }

  const onResetButtonClick = () => {
    props.setStateB("B");
  };

  return (
    <Box>
      <Typography
        sx={{ color: 'primary.main' }}
        textAlign='center'
      >
        B 組件
      </Typography>
      <Typography
        textAlign='center'
      >
        {props.stateB}
      </Typography>
      <Box
        display='flex'
        justifyContent='center'
        gap={5}
      >
        <Button
          variant='outlined'
          onClick={onButtonClick}
        >
          A 變為 B
        </Button>
        <Button
          variant='outlined'
          onClick={onResetButtonClick}
        >
          還原為 B
        </Button>
      </Box>
    </Box>
  )
}
`.trim();

const ExCode1 = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;