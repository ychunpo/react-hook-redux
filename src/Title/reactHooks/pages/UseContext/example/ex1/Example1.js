import React, { useContext, useState } from "react";
import {
  Box, Button, Stack, Typography
} from '@mui/material';

/**
* useContext: 減少組件層級
 * 類組件的的 context 的 hooks 版，
 * 主要用於在父組件中公共數據和邏輯的抽離，
 * 方便子組件公用。
 */
// 1. 創建 Context 對象
const ThemeContext = React.createContext();
// 2. Provider 組件，發送數據，向所有的子組件提供數據
const Example1 = () => {
  const [theme, setTheme] = useState('green');

  return (
    // Provider 發送數據，兩個屬性用對象的形式
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box sx={{ p: 1 }}>
        <Typography
          variant='h6'
          textAlign='center'
        >
          Example1
        </Typography>
        <Toolbar />
      </Box>
    </ThemeContext.Provider>
  )
}
// 中間組件
const Toolbar = props => {
  return (
    <Box sx={{ p: 1 }}>
      <ThemedButton />
    </Box>
  )
}
// 3. 子孫組件使用 useContext 接收收據
const ThemedButton = (props) => {
  // useContext 接收頂層組件傳遞過來的context數據，
  // 傳遞過來是對象，就用對象結構接收
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Stack>
      {/* 可以直接使用接收到的數據和方法 */}
      <Box
        sx={{ p: 1 }}
        style={{ 'color': theme }}
      >
        Theme: {theme}
      </Box>
      <Button onClick={() => setTheme('red')}>
        切换主题
      </Button>
    </Stack>
  )
}
export default Example1;