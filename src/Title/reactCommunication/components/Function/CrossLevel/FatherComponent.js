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