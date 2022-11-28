import React, { useContext } from 'react';
import listContext from './listContext';

function BComponent() {
  const { state, dispatch } = useContext(listContext);
  const { list } = state;
  const deleteList = (index) => {
    dispatch({ type: "deleteList", payload: { deleteIndex: index } });
  }
  return (
    <ul>
      {list.length !== 0 && (<div>按名字可刪除</div>)}
      {list.map((item, index) => (
        <li
          style={{
            padding: '2px',
            cursor: 'pointer'
          }}
          key={index}
          onClick={() => {
            deleteList(index);
          }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
export default BComponent;