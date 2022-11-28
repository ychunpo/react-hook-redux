import React from 'react';
import { Button } from '@mui/material';

function ChildProps2(props) {
  const { list, deleteList } = props;
  return (
    <ul>
      {list.map((name, index) => {
        return (
          <li key={index}>
            {name}
            <Button
              sx={{
                color: 'red'
              }}
              onClick={() => { deleteList(index) }}
            >
              删除
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
export default ChildProps2;