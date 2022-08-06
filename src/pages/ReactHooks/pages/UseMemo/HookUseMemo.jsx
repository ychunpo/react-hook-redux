import React from 'react'
import SlowAppNoUseMemo from './example/SlowApp/SlowApp_NoUseMemo';
import SlowAppUseMemo from './example/SlowApp/SlowApp_useMemo';

const HookUseMemo = () => {
  return (
    <div id='useMemo'>
      <h2>useMemo</h2>
      <div className='example-group'>
        <SlowAppNoUseMemo />
        <SlowAppUseMemo />
      </div>
      <hr />
    </div >
  )
}

export default HookUseMemo