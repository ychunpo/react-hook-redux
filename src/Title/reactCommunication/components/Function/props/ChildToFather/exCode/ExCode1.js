import React from 'react';
import PrismRender from '../../../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ChildProps2 from './ChildProps2';

function FatherProps2() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addList = () => {
    if (name !== "") {
      setList((preList) => {
        const newList = [...preList];
        newList.push(name);
        return newList;
      });
    }
  };

  const deleteList = (deleteIndex) => {
    const newList = list.filter((_, index) => index !== deleteIndex);
    setList(newList);
  };
  return (
    <Box>
      <Box display='flex' alignContent='center'>
        <TextField
          id="outlined-basic"
          label="請输入名字"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="outlined" onClick={addList}>添加</Button>
      </Box>
      <ChildProps2 list={list} deleteList={deleteList} />
    </Box>
  );
}
export default FatherProps2;

import React from 'react';
import { Button } from '@mui/material';

function ChildProps2(props) {
  const { list, deleteList } = props;
  return (
    <ul>
      {list.map((name, index) => {
        return (
          <li key={index}>
            {name}
            <Button
              sx={{
                color: 'red'
              }}
              onClick={() => { deleteList(index) }}
            >
              删除
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
export default ChildProps2;
`.trim();

const ExCode1 = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;