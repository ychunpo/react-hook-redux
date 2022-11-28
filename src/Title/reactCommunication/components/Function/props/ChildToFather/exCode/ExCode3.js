import React from 'react';
import PrismRender from '../../../../../../../frame/components/prism/PrismRender';

const code = `
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
`.trim();

const ExCode1 = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;