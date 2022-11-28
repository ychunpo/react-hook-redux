import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Child3 = ({
  captionData,
  setCaptionData,
  resetData,
  handleChange,
  storeCaption
}) => {
  return (
    <Box
      m={1}
      display='flex'
      justifyContent='center'
    >
      <Box>
        <Typography>
          子組件 - 傳送value給組件和重設資料
        </Typography>
        <input
          style={{
            margin: '5px',
            padding: '9px',
            border: '1px solid #757ce8',
            borderRadius: '5%'
          }}
          type='number'
          name="caption"
          value={storeCaption}
          onChange={handleChange}
        />
        <Button
          m='5px'
          variant='outlined'
          onClick={() => resetData()}
        >
          Reset
        </Button>
      </Box>
    </Box >
  )
}
export default Child3;