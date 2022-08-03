import React, { useState } from 'react';
import SiblingChild1 from './SiblingChild1';
import SiblingChild2 from './SiblingChild2';
import './sibling-ex1.css';

function SiblingFather() {
  const [child2Value, setChild2Value] = useState({});
  const [deleteItem, setDeleteItem] = useState({});
  const addChild2List = (value) => {
    setChild2Value({ value });
  };

  const deleteChild2List = (index) => {
    setDeleteItem({ index });
  };

  return (
    <div>
      <SiblingChild1
        addChild2List={addChild2List}
        deleteChild2List={deleteChild2List}
      />
      <SiblingChild2
        child2Value={child2Value}
        deleteItem={deleteItem}
      />
    </div>
  )
}

export default SiblingFather;
