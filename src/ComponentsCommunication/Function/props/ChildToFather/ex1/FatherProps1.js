import React, { useState } from 'react'
import ChildProps1 from './ChildProps1';

function FatherProps1() {
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
        placeholder="請输入名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addList}>添加</button>
      <ChildProps1 list={list} deleteList={deleteList} />
    </div>
  );
}

export default FatherProps1


