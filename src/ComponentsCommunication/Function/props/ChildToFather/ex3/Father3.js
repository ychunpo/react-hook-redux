import React, { useState } from 'react';
import Child3 from './Child3';
import JsonReport from './JsonReport';
import './example3.css';
import { staticData } from './staticData';

const Father3 = () => {
  const [captionData, setCaptionData] = useState(staticData);
  const [storeCaption, setStoreCaption] = useState('');

  //console.log('captionData:', captionData)
  //console.log('captionData length:', captionData.length)
  //console.log('captionData->three:', captionData[2].three)

  const handleChange = e => {
    setStoreCaption(e.target.value);
    updateValue(e.target.value);
  };
  //console.log(storeCaption);

  const updateValue = (value) => {
    const changePosition = captionData.length - 1
    const newData = [...captionData];
    newData[changePosition].three = value;
    setCaptionData(newData);
  }

  const resetData = (e) => {
    setCaptionData([...staticData]);
    setStoreCaption('');
    updateValue('');
  }

  return (
    <div className='ex3-father-container'>
      <p>父組件 - 通過子組件令數組單項目three更改value</p>
      <div className='ex3-json-report-list'>
        <p>Json List</p>
        <JsonReport captionData={captionData} />
      </div>
      <Child3
        captionData={captionData}
        setCaptionData={setCaptionData}
        resetData={resetData}
        handleChange={handleChange}
        storeCaption={storeCaption}
      />
    </div>
  )
}

export default Father3