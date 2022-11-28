import React, { useState, useEffect } from 'react';

export const ListFunction = ({ getItems }) => {
  const [item, setItems] = useState([])
  useEffect(() => {
    setItems(getItems())
    console.log('Update Items')
  }, [getItems])

  return item.map(item => <span key={item}>{item} , </span>)
}