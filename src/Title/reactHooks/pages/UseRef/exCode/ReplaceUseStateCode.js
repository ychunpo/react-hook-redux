import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../scss/render_count.scss';

const ReplaceUseState = () => {
  const [stateExp, setStateExp] = useState(100);
  const refExp = useRef(100);

  const spendStateMoney = () => setStateExp(prevVal => prevVal - 1);

  const spendRefMoney = () => {
    refExp.current = refExp.current - 1;
    console.log('refExp.current', refExp.current);
  };

  return (
    <Box className='useRef-container'>
      <Box>
        <Stack
          sx={{ gap: 1 }}
          textAlign='center'
        >
          <Typography
            variant='h6'
          >
            Example - useRef 不能取代 useState
          </Typography>
          <Typography>
            ***因為 useRef 不會觸發 re-render***
          </Typography>
        </Stack>
        <section className="useRef-border">
          <Stack sx={{ p: 1, gap: 1 }}>
            <Typography>
              useState value: {stateExp}
            </Typography>
            <button
              className='useRef-btn'
              onClick={spendStateMoney}>
              Spend
            </button>
          </Stack>
          <Stack sx={{ p: 1, gap: 1 }}>
            <Typography>
              useRef value: {refExp.current}
            </Typography>
            <button
              className='useRef-btn'
              onClick={spendRefMoney}>
              Spend
            </button>
          </Stack>
        </section>
      </Box>
    </Box>
  )
}
export default ReplaceUseState;
`.trim();

const ReplaceUseStateCode = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ReplaceUseStateCode;