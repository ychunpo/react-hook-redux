import React, { useContext } from 'react';
import listContext from './listContext';

function BLevel() {
  const { state, dispatch } = useContext(listContext);
  const { list } = state;
  const deleteList = (index) => {
    dispatch({ type: deleteList, payload: { deleteIndex: index } });
  }

  return (
    <ul>
      {list.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            deleteList(index);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default BLevel;
