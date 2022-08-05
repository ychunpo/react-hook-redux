import React from 'react';
import ListAppUseCallback from './example/ListApp/ListApp_useCallback';

const HookUseCallback = () => {
  return (
    <div id='useCallback'>
      <h2>UseCallback</h2>
      <div className='example-item'>
        <ListAppUseCallback />
      </div>
      <hr />
    </div>
  )
}

export default HookUseCallback;
