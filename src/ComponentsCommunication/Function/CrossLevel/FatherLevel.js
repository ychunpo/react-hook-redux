import React, { useState, useReducer } from "react"
import listContext from "./listContext";
import ALevel from "./ALevel";

const listReducer = (state, action) => {
  const { type, payload } = action;
  const { list } = state;
  switch (type) {
    case "addList":
      const { name } = payload;
      // 注意这里不能写list.push(name)  永远只能返回新的state，不能改变原来的state
      return { ...state, list: [...list, name] };
    case "deleteList":
      const { deleteIndex } = payload;
      const newList = list.filter((_, index) => index !== deleteIndex);
      return { ...state, list: newList };
    default:
      return state;
  }
};

function FatherLevel() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(listReducer, { list: [] });
  const addList = () => {
    if (name !== "") {
      dispatch({
        type: "addList",
        payload: {
          name
        }
      });
    }
  };
  return (
    <div>
      <input
        placeholder="请输入名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addList}>添加</button>
      <listContext.Provider value={{ state, dispatch }}>
        <ALevel />
      </listContext.Provider>
    </div>
  )
}

export default FatherLevel
