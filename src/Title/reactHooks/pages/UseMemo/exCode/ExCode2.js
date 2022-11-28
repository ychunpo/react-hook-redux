import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useMemo, useState } from "react";
import { Box, Button, Divider, Typography } from '@mui/material';
/**
 * useMemo  記憶組件
 * 作用：可以保存組件的渲染結果，根據條件確實是否重新渲染，主要是用來進行性能優化
 * 特性：
 * 1. 使用useMemo包括的jsx代碼段初次渲染後，
 *    會將渲染結果保存，組件再次更新時不會重複渲染
 * 2. 指定狀態條件發生變化時，才會進行重新渲染
 * 場景：
 * 在一些複雜計算的代碼段中，可能並不依賴很多組件狀態，
 * 如果任一狀態發生變化時都重新渲染，是很大的性能開銷，
 * 此時就可以使用useMemo，將這樣的代碼段包裹起來，
 * 
 * 只有依賴的狀態發生變化時才會重新渲染，可以進行組件的性能提升。
 */
const Child = ({ c }) => {
  console.log('Child組件重新渲染', c)
  return (
    <Typography>{c}</Typography>
  )
}

const Parent = ({ a, b }) => {
  const childA = (
    <Box
      sx={{ p: '2px', border: '2px solid blue' }}
    >
      {console.log('這是一個 A 組件發動')}
      <Child c={a} />
    </Box>
  )

  const childB = useMemo(() =>
    <Box
      sx={{ p: '2px', border: '2px solid orange' }}
    >
      {console.log('這是一個 B 組件發動')}
      <Child c={b} />
    </Box>, [b]
  )
  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{
        p: 1,
        m: '5px auto',
        gap: '5px',
        border: '1px solid red'
      }}>
      <Typography
        textAlign='center'
        sx={{
          color: 'blue',
        }}
      >
        父組件內有 A 和 B 組件
      </Typography>
      <Divider sx={{ m: 1 }} />
      <Box sx={{ color: 'red' }}>
        <Typography>
          A 組件在 A 和 B 發生改變時都會重新渲染
        </Typography>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        sx={{ m: '0 auto', gap: 1 }}
      >
        <Typography>A 組件:</Typography>
        {childA}
      </Box>
      <Divider sx={{ m: 1 }} />
      <Box sx={{ color: 'red' }}>
        <Typography>B 組件初次渲染之後，</Typography>
        <Typography>只有 B 發生改變時才會重新渲染，</Typography>
        <Typography>否則保留上一次渲染的結果。</Typography>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        sx={{ m: '0 auto', gap: 1 }}
      >
        <Typography>B 組件:</Typography>
        {childB}
      </Box>
    </Box >
  )
}

const Example2 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <Box sx={{ m: 1 }}>
      <Typography
        variant="h6"
        textAlign="center"
      >
        Example2
      </Typography>
      <Parent a={a} b={b} />
      <Box
        sx={{ p: 2, gap: 2 }}
        display='flex' justifyContent='center'
      >
        <Button
          variant="contained"
          onClick={() => setA(a + 1)}>
          改變 a
        </Button>
        <Button
          variant="contained"
          onClick={() => setB(b + 1)}
        >
          改變 b
        </Button>
      </Box>
    </Box>
  )
}
export default Example2;
`.trim();

const ExCode1 = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;