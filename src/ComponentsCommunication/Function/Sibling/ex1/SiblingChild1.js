import React, { useState } from "react";

export default function SiblingChild1(props) {
  const { addChild2List, deleteChild2List } = props;
  const [inpValue, setInpValue] = useState("");

  const addList = () => {
    if (inpValue) {
      addChild2List(inpValue);
    }
  };

  const deleteList = () => {
    deleteChild2List(0);
  };
  return (
    <>
      <div className="sibling-ex1-child-1">
        <h4 style={{ textAlign: "left" }}>I am Child1</h4>
        <div style={{ textAlign: "left" }}>
          <input
            placeholder="請输入"
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value)}
          />
          <button onClick={addList}>为Child2组件的list添加一项</button>
          <button onClick={deleteList}>删除第一项</button>
        </div>
      </div>
    </>
  );
}
