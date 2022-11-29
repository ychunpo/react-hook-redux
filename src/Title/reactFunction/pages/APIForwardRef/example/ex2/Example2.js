import React, { createRef, forwardRef, useCallback } from "react";
import {
  Box, Button, Stack, Typography
} from "@mui/material";

/**
 * forwardRef:
 * 是React的一個高級特性，理解useRef之前需要先理解forwardRef
 * 作用：forwardRef是一個高階組件，可以轉發收到的ref給其子組件，使其外部可以獲取對一個組件內部子組件的引用
 */
// forwardRef是一個高階組件，它能將收到的ref轉發給它的子組件
const FocusButton = forwardRef((props, ref) => (
  <Stack sx={{ p: 1, gap: 1 }}>
    <input style={{ padding: '5px' }} ref={ref} />
    <Button>
      {props.children}
    </Button>
  </Stack>
))
const Example2 = () => {
  // 創建一個ref引用
  const ref = createRef();
  /**
   * ref本身是綁定到FancyButton上的引用，
   * ref.current正常獲取到的應該是FancyButton，
   * 但是在FancyButton內部通過forwardRef就將引用轉發給了input，
   * 此時就將ref轉發到了input上，所以ref.current獲取到的就是input元素，
   * 因此才可以調用input元素的focus方法。
   */
  const handleClick = useCallback(() => ref.current.focus(), []);

  return (
    <Box>
      {/* 將ref綁定引用到 FocusButton 上 */}
      <Typography
        variant='h6'
        textAlign='center'
      >
        Example 2
      </Typography>
      <Stack>
        <FocusButton ref={ref}>No function Click</FocusButton>
        <Button
          sx={{
            m: '0 auto',
            width: '90%'
          }}
          variant='contained'
          onClick={handleClick}
        >
          Get Focus
        </Button>
      </Stack>
    </Box>
  )
}
export default Example2;