import React, { useEffect, useRef, useState } from "react";
import {
  Box, Button, Divider, Stack, Typography
} from '@mui/material';

/**
* useRef: 保存引用值
 * 兩個作用：
 * 1. 相當於類組件的一個實例屬性，只要組件實例不銷毀，
 *    就一直保持著引用，組件更新時也不會重新初始化，
 *    返回一個包含current屬性的對象
 * 2. 獲取dom元素的一個引用
 */
const Counter1 = () => {
  const [count, setCount] = useState(0);
  // 初始化後會一直保持著引用，
  // 狀態變化組件更新重新渲染時也不會被重新初始化，
  // 返回一個具有current屬性的對象
  const countRef = useRef(0);
  console.log('countRef', countRef);

  useEffect(() => {
    // 組件初始化和狀態更新時執行
    countRef.current = count;
    console.log('Counter 1 組件渲染完成');
  })

  const prevCount = countRef.current;

  return (
    <Box>
      <Typography
        textAlign="center"
      >
        Counter 1
      </Typography>
      <Stack sx={{ p: 1, gap: 1 }}>
        <Typography
          textAlign="center"
        >
          NowCount: {count}, beforeCount: {prevCount}
        </Typography>
        {console.log('組件渲染中 Counter 1')}
        <Button
          variant='contained'
          onClick={() => setCount(count + 1)}>
          更新 count
        </Button>
      </Stack>
    </Box>
  )
}
// 使用類組件實現相似功能： 使用useRef定義的變量，相當於類組件的實例屬性
class Counter2 extends React.Component {
  state = { count: 0 }
  prevCount = 0; // 相當於useRef定義的變量，不會在更新渲染時重新初始化
  // 初始化渲染完成後執行
  componentDidMount() {
    console.log('組件初始化渲染完畢 Counter2');
  }
  // 數據狀態更新時執行
  componentDidUpdate() {
    console.log('組件更新渲染完畢 Counter 2');
    this.prevCount = this.state.count;
  }

  render() {
    return (
      <Box>
        <Typography textAlign="center">
          Counter 2
        </Typography>
        <Stack sx={{ p: 1, gap: 1 }}>
          <Typography textAlign="center">
            NowCount: {this.state.count}, beforeCount: {this.prevCount}
          </Typography>
          {console.log('組件更新渲染中 Counter 2')}
          <Button
            variant='contained'
            onClick={() => this.setState({
              count: this.state.count + 1
            })}>
            更新 count
          </Button>
        </Stack>
      </Box>
    )
  }
}
// 自定義屬性模擬類似功能
const countRef = { current: 0 }
// 唯一區別是因為使用的全局變量，Counter3卸載時，
// 該變量引用還在，數據一直不會變，而使用useRef，
// 組件卸載時引用會丟失
const Counter3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('組件初始化渲染/更新渲染完成 Counter3')
    countRef.current = count;
  })
  const prevCount = countRef.current;

  return (
    <Box>
      <Typography textAlign="center">
        Counter 3
      </Typography>
      <Stack sx={{ p: 1, gap: 1 }}>
        <Typography textAlign="center">
          NowCount: {count}, beforeCount: {prevCount}
        </Typography>
        {console.log('組件渲染中 Counter 3')}
        <Button
          variant='contained'
          onClick={() => setCount(count + 1)}>
          更新 count
        </Button>
      </Stack>
    </Box>
  )
}
// useRef第二个作用演示：获取一个DOM元素的引用
const TextInputWithFocusButton = () => {
  // 配合ref屬性使用可以獲取input元素的引用，
  // 類似react中的基礎api：React.createRef();
  // 唯一區別是，createRef在每次組件更新時都重新創建一個新的變量，
  // useRef則一直會保持初始化時創建的對象的引用
  const inputElement = useRef();
  const onButtonOnFocus = () => {
    console.log('inputElement', inputElement);
    inputElement.current.focus();
  }
  return (
    <Stack sx={{ p: 1, gap: 1 }}>
      <input
        style={{
          padding: '5px'
        }}
        ref={inputElement}
        type='text'
      />
      <Button
        variant='outlined'
        onClick={onButtonOnFocus}
      >
        Focus input
      </Button>
    </Stack>
  )
}
const Example2 = () => {
  const [show, setShow] = useState(true);
  return (
    <Box>
      <Typography
        variant='h6'
        textAlign='center'
      >
        Example 2
      </Typography>
      <Typography textAlign='center'>
        useRef 第一個作用：
      </Typography>
      <Stack
        sx={{
          p: 1, gap: 1,
          border: '1px solid red'
        }}>
        {show ? <Counter1 /> : null}
        <Divider sx={{ m: 1 }} />
        {show ? <Counter2 /> : null}
        <Divider sx={{ m: 1 }} />
        {show ? <Counter3 /> : null}
        <Divider sx={{ m: 1 }} />
        <Button
          variant='outlined'
          onClick={() => setShow(!show)}>
          {show ? '所有 Counter 清除' : '所有 Counter 再現'}
        </Button>
      </Stack>
      <Divider sx={{ m: 1 }} />
      <Typography textAlign='center'>
        useRef 第二個作用：
      </Typography>
      <Box sx={{ border: '1px solid red' }}>
        <TextInputWithFocusButton />
      </Box>
    </Box>
  )
}
export default Example2;