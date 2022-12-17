import React, { useState } from 'react';
import AddImageBtn from './AddImageBtn';
import ProgressList from './progressList/ProgressList';

const Upload = () => {
  const [files, setFiles] = useState([]);
  return (
    <div>
      <AddImageBtn setFiles={setFiles} />
      <ProgressList files={files} />
    </div>
  )
}

export default Upload
