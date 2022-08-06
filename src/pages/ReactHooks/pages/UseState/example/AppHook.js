import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function AppHook() {
  const [obj, setObject] = useState({
    count: 0,
  });

  return (
    <div className='example-container'>
      <div className='title-context-center'>
        <h3>useState</h3>
        <p>Count: {obj.count}</p>
        <ButtonGroup variant="outlined"
          aria-label="outlined primary button group">
          <Button variant="outlined" color="success"
            onClick={() => setObject({
              ...obj,
              count: obj.count + 1
            })}
          >
            +
          </Button>
          <Button variant="outlined" color="secondary"
            onClick={() => setObject({
              ...obj,
              count: obj.count - 1
            })}
          >
            -
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default AppHook;
