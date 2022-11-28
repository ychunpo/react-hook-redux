import React, { useState, useEffect } from "react";

function UpdateCompare() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  }, []);

  useEffect(() => {
    setCount2(prev => prev + 1);
    setCount2(prev => prev + 1);
    setCount2(prev => prev + 1);
  }, []);

  return (
    <div className='example-container'>
      <h3>
        <span>setCount(count1 + 1) </span>
        and
        <span> setCount(prev => prev + 1) </span>
        compare
      </h3>
      <br />
      <div>
        <h4>setCount(count1 + 1): </h4>
        <p>Current value: {count1}</p>
      </div>

      <div>
        <h4>setCount(prev => prev + 1): </h4>
        <p>Current value: {count2}</p>
      </div>
    </div>
  );
}

export default UpdateCompare;