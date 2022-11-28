import React from 'react';
import PrismRender from '../../../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ChildProps1 from './ChildProps1';

function FatherProps1() {
  const [name, setName] = useState("")
  const [list, setList] = useState([]);

  const addList = () => {
    if (name !== "") {
      setList((preList) => {
        const newList = [...preList];
        newList.push({ id: preList.length, name });
        return newList;
      });
    }
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
        <Button onClick={addList}>添加</Button>
      </Box>
      <br />
      <ChildProps1 list={list} />
    </Box>
  )
}
export default FatherProps1;

import React from 'react';

function ChildProps1(props) {
  const { list } = props;
  return (
    <>
      <ul>
        {list.map((item) => {
          const { id, name } = item;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}

export default ChildProps1;
`.trim();

const ExCode1 = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;