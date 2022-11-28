import React, { useState } from 'react';
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