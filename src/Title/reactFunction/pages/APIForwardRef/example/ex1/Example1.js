import { useRef, forwardRef } from "react";
import {
  Box, Button, Stack, Typography
} from "@mui/material";

const Example1 = () => {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <Box sx={{ p: 1 }}>
      <Typography
        variant='h6'
        textAlign='center'
      >
        Example: 1
      </Typography>
      <Stack sx={{ p: 1, gap: 1 }}>
        <Child ref={inputRef} />
        <Button
          variant="outlined"
          onClick={handleClick}
        >
          Focus the text input
        </Button>
      </Stack>
    </Box>
  );
};

const Child = forwardRef((props, ref) => {
  return (
    <input
      style={{ padding: '5px' }}
      type="text"
      ref={ref}
    />)
});

export default Example1;