import React, { useReducer } from "react";
import { Box, Button, ButtonGroup, Typography } from '@mui/material';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}

function Example1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Box>
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
      >
        Example: 1
      </Typography>
      <Typography
        p={1}
        variant="h6"
        align="center"
      >
        Count: {state.count}
      </Typography>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>Decrement</Button>
        <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
      </ButtonGroup>
    </Box >
  );
}

export default Example1;