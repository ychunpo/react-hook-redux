import React, { useState } from 'react';
import { slowFunction } from '../components/slowFunction';
import '../../scss/slow_app.scss';

const SlowAppNoUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const doubleNumber = slowFunction(number);

  const themeStyle = {
    backgroundColor: dark ? '#2c3e50' : '#ecf0f1',
    color: dark ? '#ecf0f1' : '#2c3e50'
  }

  const changeTheme = () => {
    setDark(prevDark => !prevDark)
  }

  const changeHandler = e => {
    setNumber(e.target.value)
  }

  return (
    <div className='slow-example-container' style={themeStyle}>
      <div className='slow-wrapper'>
        <div className='slow-inputGroup'>
          <h3>Function - no useMemo</h3>
          <p>Number is {number}</p>
          <input className='slow-input'
            type='number'
            value={number}
            onChange={changeHandler}
          />
          <div className='slow-doubleNumber'>
            <span className='slow-span'>Result: </span>
            {doubleNumber}
          </div>
          <button className='slow-btn' onClick={changeTheme}>Change Theme</button>
        </div>
      </div>
    </div>
  )
}

export default SlowAppNoUseMemo;