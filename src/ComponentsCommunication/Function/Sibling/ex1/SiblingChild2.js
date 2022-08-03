import React, { useState, useEffect } from "react";

export default function SiblingChild2(props) {
  const { child2Value, deleteItem } = props;
  const [list, setList] = useState([]);
  useEffect(() => {
    if (child2Value.value) {
      const { value } = child2Value;
      console.log(value, "value");
      setList((preList) => {
        return [...preList, value];
      });
    }
  }, [child2Value]);
  useEffect(() => {
    setList((preList) => {
      if (preList.length) {
        const newList = preList.filter((_, index) => index !== 0);
        return newList;
      }
      return preList;
    });
  }, [deleteItem]);
  return (
    <ul className="sibling-ex1-child-2">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
