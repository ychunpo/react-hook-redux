import React, { useEffect, useMemo, useState } from 'react';
import { slowFunction } from '../components/slowFunction';
import '../../scss/slow_app.scss';

const SlowAppUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? '#2c3e50' : '#ecf0f1',
      color: dark ? '#ecf0f1' : '#2c3e50'
    }
  }, [dark])

  useEffect(() => {
    console.log('useMemo - Theme Change')
  }, [themeStyle])

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
          <h3>Function - useMemo</h3>
          <p>Number is {number}</p>
          <input
            className='slow-input'
            type='number'
            value={number}
            onChange={changeHandler}
          />
          <div className='slow-doubleNumber'>
            <span className='slow-span'>
              Result:
            </span>
            {doubleNumber}
          </div>
          <button className='slow-btn' onClick={changeTheme}>Change Theme</button>
        </div>
      </div>
    </div>
  )
}

export default SlowAppUseMemo;
