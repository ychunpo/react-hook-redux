import React, { lazy, Suspense } from "react";
import {
  Box, Button, CircularProgress,
  Divider, Stack, Typography
} from "@mui/material";

const OtherButton = lazy(
  () => delayLazyLoading(import('./OtherButton'))
);

const Example1 = () => {

  const resetHandle = () => {
    window.location.reload();
  }

  return (
    <Box sx={{ m: 1, p: 1 }}>
      <Typography variant='h6' textAlign='center'>
        Example 1
      </Typography>
      <Typography textAlign='center' sx={{ p: 1 }}>
        Lazy loading
      </Typography>
      <Stack sx={{ p: 3, border: '2px solid blue' }}>
        <Suspense fallback={
          <Stack sx={{ m: '0 auto' }}>
            <CircularProgress />
          </Stack>
        }>
          <OtherButton />
        </Suspense>
      </Stack>
      <Divider sx={{ m: 1 }} />
      <Stack>
        <Button
          variant='outlined'
          onClick={resetHandle}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
};

function delayLazyLoading(component) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => component);
}
export default Example1;