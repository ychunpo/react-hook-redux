import React, { useState } from 'react'
import ChildProps2 from './ChildProps2';

function FatherProps2() {
  const [name, setName] = useState("")
  const [list, setList] = useState([]);

  const addList = () => {
    if (name !== "") {
      setList((preList) => {
        const newList = [...preList];
        newList.push(name);
        return newList;
      });
    }
  };

  const deleteList = (deleteIndex) => {
    const newList = list.filter((_, index) => index !== deleteIndex);
    setList(newList);
  };

  return (
    <div>
      <input
        placeholder="请输入名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addList}>添加</button>
      <ChildProps2 list={list} deleteList={deleteList} />
    </div>
  );
}

export default FatherProps2


