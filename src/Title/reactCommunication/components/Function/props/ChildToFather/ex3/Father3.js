import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Child3 from './Child3';
import JsonReport from './JsonReport';
import './example3.css';
import { staticData } from './staticData';

const Father3 = () => {
  const [captionData, setCaptionData] = useState(staticData);
  const [storeCaption, setStoreCaption] = useState('');

  const handleChange = e => {
    setStoreCaption(e.target.value);
    updateValue(e.target.value);
  };

  const updateValue = (value) => {
    const changePosition = captionData.length - 1
    const newData = [...captionData];
    newData[changePosition].age = value;
    setCaptionData(newData);
  }

  const resetData = () => {
    setStoreCaption('');
    updateValue('24');
  }
  return (
    <Box sx={{ p: 1, border: 1, borderColor: 'blue' }}>
      <Typography
        textAlign="center"
      >
        父組件 - 通過子組件令數組單項目 age 更改 value
      </Typography>
      <Box className='ex3-json-report-list'>
        <Typography>Json List</Typography>
        <JsonReport captionData={captionData} />
      </Box>
      <Child3
        captionData={captionData}
        setCaptionData={setCaptionData}
        resetData={resetData}
        handleChange={handleChange}
        storeCaption={storeCaption}
      />
    </Box>
  )
}
export default Father3;