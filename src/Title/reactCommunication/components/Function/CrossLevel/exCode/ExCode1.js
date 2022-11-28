import React from 'react';
import PrismRender from '../../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useReducer } from "react";
import { Box, Button, TextField } from '@mui/material';
import listContext from "./listContext";
import AComponent from "./AComponent";

const listReducer = (state, action) => {
  const { type, payload } = action;
  const { list } = state;
  switch (type) {
    case "addList":
      const { name } = payload;
      return { ...state, list: [...list, name] };
    case "deleteList":
      const { deleteIndex } = payload;
      const newList = list.filter((_, index) => index !== deleteIndex);
      return { ...state, list: newList };
    default:
      return state;
  }
};

function FatherComponent() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(listReducer, { list: [] });
  const addList = () => {
    if (name !== "") {
      dispatch({ type: "addList", payload: { name } });
    }
  };
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <TextField
          id="outlined-basic"
          label="請输入名字"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          sx={{ p: '15px' }}
          variant="outlined"
          onClick={addList}
        >
          添加
        </Button>
      </Box>
      <listContext.Provider value={{ state, dispatch }}>
        <Box sx={{ p: '6px' }}>
          <AComponent />
        </Box>
      </listContext.Provider>
    </Box >
  )
}
export default FatherComponent;

import React from 'react';
import BComponent from './BComponent';

function AComponent() {
  return <BComponent />
}
export default AComponent;

import React, { useContext } from 'react';
import listContext from './listContext';

function BComponent() {
  const { state, dispatch } = useContext(listContext);
  const { list } = state;
  const deleteList = (index) => {
    dispatch({ type: "deleteList", payload: { deleteIndex: index } });
  }
  return (
    <ul>
      {list.length !== 0 && (<div>按名字可刪除</div>)}
      {list.map((item, index) => (
        <li
          style={{
            padding: '2px',
            cursor: 'pointer'
          }}
          key={index}
          onClick={() => {
            deleteList(index);
          }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
export default BComponent;
`.trim();

const ExCode1 = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;