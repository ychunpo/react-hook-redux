import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../scss/render_count.scss';

const RenderCount = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);  // { current: 0 }
  const inputRef = useRef();
  const previousName = useRef('');

  useEffect(() => {
    renderCount.current += 1;
    previousName.current = name
  }, [name])

  const changeHandle = e => {
    setName(e.target.value)
  }

  const clickHandle = () => {
    inputRef.current.focus()
  }

  return (
    <Box className='useRef-container'>
      <Box>
        <Box>
          <Typography
            variant='h6'
            textAlign='center'
          >
            Example - Render and Count
          </Typography>
          <Box
            sx={{ p: 2 }}
          >
            <Typography
              textAlign='center'
            >
              ***在不 re-render 的情況下更新值***
            </Typography>
            <Typography
              textAlign='center'
            >
              ***也可以直接抓取 DOM 同時控制 DOM 行為***
            </Typography>
          </Box>

          <input className='useRef-inputBox'
            type='text'
            ref={inputRef}
            value={name}
            placeholder="請輸入"
            onChange={changeHandle}
          />
          <Stack sx={{ p: 1, gap: 1 }}>
            <Typography className='useRef-text'>
              - Input content is {name}
            </Typography>
            <Typography className='useRef-text'>
              - Previous name is {previousName.current}
            </Typography>
            <Typography className='useRef-text'>
              - Rendered times: {renderCount.current}
            </Typography>
          </Stack>
        </Box>
        <Stack sx={{ p: 1 }}>
          <button
            className='useRef-btn'
            onClick={clickHandle}
          >
            Focus
          </button>
        </Stack>
      </Box>
    </Box>
  )
}
export default RenderCount;
`.trim();

const RenderCountCode = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default RenderCountCode;