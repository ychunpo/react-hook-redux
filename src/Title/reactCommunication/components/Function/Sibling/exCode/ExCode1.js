import React from 'react';
import PrismRender from '../../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState } from 'react';
import { Box } from '@mui/material';
import SiblingChild1 from './SiblingChild1';
import SiblingChild2 from './SiblingChild2';

function SiblingFather() {
  const [child2Value, setChild2Value] = useState({});
  const [deleteItem, setDeleteItem] = useState({});

  const addChild2List = (value) => {
    setChild2Value({ value });
  };

  const deleteChild2List = (index) => {
    setDeleteItem({ index });
  };
  return (
    <Box>
      <SiblingChild1
        addChild2List={addChild2List}
        deleteChild2List={deleteChild2List}
      />
      <SiblingChild2
        child2Value={child2Value}
        deleteItem={deleteItem}
      />
    </Box>
  )
}
export default SiblingFather;

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

import React, { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';

export default function SiblingChild2(props) {
  const { child2Value, deleteItem } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    if (child2Value.value) {
      const { value } = child2Value;
      setList((preList) => {
        return [...preList, value];
      });
    }
  }, [child2Value]);

  useEffect(() => {
    setList((preList) => {
      if (preList.length) {
        let newList = preList.filter((_, index) => index !== 0);
        return newList;
      }
      return preList;
    });
  }, [deleteItem]);

  return (
    <Box sx={{ m: '5px', p: '10px', border: '1px solid blue' }}>
      <Typography
        textAlign='center'
      >
        子組件 2
      </Typography>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </Box>
  );
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