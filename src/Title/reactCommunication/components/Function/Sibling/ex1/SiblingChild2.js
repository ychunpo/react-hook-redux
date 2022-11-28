import React, { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';

export default function SiblingChild2(props) {
  const { child2Value, deleteItem } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    if (child2Value.value) {
      const { value } = child2Value;
      setList((preList) => {
        return [...preList, value];
      });
    }
  }, [child2Value]);

  useEffect(() => {
    setList((preList) => {
      if (preList.length) {
        let newList = preList.filter((_, index) => index !== 0);
        return newList;
      }
      return preList;
    });
  }, [deleteItem]);

  return (
    <Box sx={{ m: '5px', p: '10px', border: '1px solid blue' }}>
      <Typography
        textAlign='center'
      >
        子組件 2
      </Typography>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </Box>
  );
}