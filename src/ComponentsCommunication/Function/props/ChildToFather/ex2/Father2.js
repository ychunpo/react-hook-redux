import React, { useState } from 'react';
import Child2 from './Child2';
import './example2.css';

const Father2 = () => {
  const [parentCount, setParentCount] = useState(0)

  const getChildCount = (value) => {
    setParentCount(value);
  }

  return (
    <div className="father2-box">
      <p>父組件-></p>
      <p>子組件傳送來的數字: {parentCount} </p>
      <Child2 getCount={getChildCount} />
    </div>
  )
}

export default Father2;
