import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ListFunction } from '../components/ListFunction';
import '../../scss/list_app.scss';

const ListAppUseCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  // very slow function
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? '#006266' : '#F8EFBA',
      color: '#F97F51'
    }
  }, [dark])

  useEffect(() => {
    console.log('useCallback - Theme Change')
  }, [themeStyle])

  const changeHandler = e => {
    setNumber(e.target.value)
  }

  const changeTheme = () => {
    setDark(prevDark => !prevDark)
  }

  return (
    <div className='list-example-container' style={themeStyle}>
      <div className='list-app-wrapper'>
        <div className='list-app-inputGroup'>
          <h3>Function - UseCallback</h3>
          <input type='number' value={number} onChange={changeHandler} />
          <div className='list-app-doubleNumber'>
            <span className='list-app-span'>Result: </span>
            <ListFunction getItems={getItems}></ListFunction>
          </div>
        </div>
        <button className='list-app-btn' onClick={changeTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default ListAppUseCallback;