import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

let timer = null;

function AppHook() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log("useEffect - componentDidMount " + count);
      if (count === 10) {
        clearInterval(timer);
      }
    },
    [count]
  );

  useEffect(() => {
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      console.log("useEffect - componentWillUnmount");
      //clearInterval(timer);
    };
  }, []);

  return (
    <div className='example-container'>
      <div className='title-context-center'>
        <h3>useState</h3>
        <p>Count: {count}</p>
        <ButtonGroup variant="outlined"
          aria-label="outlined primary button group">
          <Button variant="outlined" color="success"
            onClick={() => clearInterval(timer)}
          >
            Stop
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default AppHook;
