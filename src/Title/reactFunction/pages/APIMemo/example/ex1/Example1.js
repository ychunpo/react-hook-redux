import React, { useState, memo } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const Example1 = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <Box sx={{ p: 1 }}>
      <Typography
        variant='h6'
        textAlign='center'
      >
        Example 1
      </Typography>
      <Stack sx={{ p: 2, gap: 1 }}>
        <Child step={step} count={count} number={number} />
        <Divider />
        <ChildMemo step={step} count={count} number={number} />
        <Divider />
        <Button
          variant='outlined'
          onClick={() => setStep(step + 1)}>
          step : {step}
        </Button>
        <Button
          variant='outlined'
          onClick={() => setCount(count + 1)}>
          count : {count}
        </Button>
        <Button
          variant='outlined'
          onClick={() => setNumber(count + step)}>
          number : {number}
        </Button>
      </Stack>
    </Box>
  );
};

const isEqual = (prevProps, nextProps) => {
  if (prevProps.number !== nextProps.number) {
    return false;
  }
  return true;
};

const Child = (props) => {
  console.log('Child re-render');
  return <Typography>(No Memo) number is: {props.number}</Typography>;
}

const ChildMemo = memo((props) => {
  console.log('ChildMemo re-render');
  return <Typography>(Use Memo) number is: {props.number}</Typography>;
}, isEqual);

export default Example1;