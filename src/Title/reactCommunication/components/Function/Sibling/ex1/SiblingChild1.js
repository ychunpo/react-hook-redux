import React, { useState } from "react";
import { Box, Button, TextField, Typography } from '@mui/material';

export default function SiblingChild1(props) {
  const { addChild2List, deleteChild2List } = props;
  const [inputValue, setInputValue] = useState("");

  const addList = () => {
    if (inputValue) {
      addChild2List(inputValue);
    }
  };

  const deleteList = () => {
    deleteChild2List(0);
  };

  return (
    <Box
      sx={{ m: '5px', p: '10px', border: '1px solid red' }}
    >
      <Typography
        sx={{ textAlign: "center" }}
      >
        子組件 1
      </Typography>
      <Box
        sx={{
          p: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <TextField
          id="outlined-basic"
          label="請输入名字"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          sx={{ p: '5px' }}
          variant="outlined"
          onClick={addList}
        >
          在子組件 2 添加一项
        </Button>
        <Button
          sx={{ p: '5px' }}
          variant="outlined"
          onClick={deleteList}
        >
          删除第一项
        </Button>
      </Box>
    </Box>
  );
}