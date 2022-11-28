import React, { useReducer } from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';

function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return { count: action.payload };
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREment':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function init(CountState) {

  return { count: CountState.count + 2 }
}

function Counter({ Count }) {
  const [state, dispatch] = useReducer(
    reducer, Count, init
  )
  return (
    <React.Fragment>
      <Typography
        p={1}
        variant="h6"
        align="center"
      >
        Count: {state.count}
      </Typography>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => dispatch({ type: 'RESET', payload: Count.count })}>重置</Button>
        <Button onClick={() => dispatch({ type: 'INCREMENT' })}>增加</Button>
        <Button onClick={() => dispatch({ type: 'DECREment' })}>减少</Button>
      </ButtonGroup>
    </React.Fragment>
  )
}

const Example2 = () => {
  const CountState = { count: 0 }
  return (
    <Box>
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
      >
        Example: 2
      </Typography>
      <Counter Count={CountState} />
    </Box>
  )
}

export default Example2;