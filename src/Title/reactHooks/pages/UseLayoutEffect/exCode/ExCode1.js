import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useLayoutEffect, useEffect } from "react";
import { Box, Typography } from '@mui/material';

/**
 * useLayOutEffect(): 同步執行副作用
 * 作用：
 *    大部分情況，使用 useEffect 可以處理組件的副作用，
 *    要同步調用一些副作用，比如對 DOM 的操作，
 *    就需要使用 useLayoutEffect，
 *    useLayoutEffect 中的副作用會在 DOM 更新之後同步執行。
 *    與useEffect類似，只是執行時間不一樣,
 *    與類組件的componentDidMount 和 componentDidUpdate生命週期執行時機一致
 * 區別：
 *  1. useLayoutEffect總是比useEffect先執行
 *  2. useEffect在全部渲染完畢後才會執行（先渲染，後改變DOM），
 *     當改變屏幕內容時可能會產生閃爍
 *  3. useLayoutEffect是會在瀏覽器 layout之後，
 *     painting 之前執行（會推遲頁面顯示的事件，先改變DOM後渲染），不會產生閃爍
 * 注意：
 *   為了用戶體驗，優先使用useEffect。以避免阻塞視圖更新，
 *   但如果涉及到同步調用一些副作用，比如操作dom，
 *   可以放在useLayoutEffect中
 */
function Example1() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // 會在render，dom更新之後就執行，不會等到渲染完
    const title = document.querySelector("#title");
    const titleWidth = title.getBoundingClientRect().width;
    console.log("useLayoutEffect"); // 先打印
    if (width !== titleWidth) {
      setWidth(titleWidth);
    }
  });

  useEffect(() => {
    // dom渲染完畢後執行
    console.log("useEffect");
  });
  return (
    <Box>
      <Typography
        variant='h6'
        textAlign='center'
      >
        Example1
      </Typography>
      <Box
        display='flex'
        sx={{
          p: 1, gap: 1
        }}
      >
        <Typography>標題: </Typography>
        <Typography id="title">Hello</Typography>
      </Box>
      <Box
        display='flex'
        sx={{
          p: 1, gap: 1
        }}
      >
        <Typography>Hello 闊度: </Typography>
        {width}
      </Box>
    </Box>
  );
}
export default Example1;
`.trim();

const ExCode1 = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;