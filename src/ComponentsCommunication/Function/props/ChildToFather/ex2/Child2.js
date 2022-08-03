import React, { useState } from 'react';
import './example2.css';

const Child2 = (props) => {
  const { getCount } = props;
  const [count, setCount] = useState(0);

  const addCount = (value) => {
    setCount(value);
    getCount(value);
  }

  return (
    <div className="child2-box">
      <p>子組件-></p>
      <p>數字： {count}</p>
      <button className="child2-btn" onClick={() => addCount(count + 1)}>添加</button>
    </div>
  )
}

export default Child2
