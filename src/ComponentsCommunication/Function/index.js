import React from 'react';
import './index.css';
import FatherProps1 from './props/FatherToChild/FatherProps1';
import FatherProps2 from './props/ChildToFather/FatherProps2';
import FatherLevel from './CrossLevel/FatherLevel';
import SiblingFather from './Sibling/SiblingFather';
import Channel from './Sibling/Channel';

function FunctionCommunication() {
  return (
    <div className='container'>
      <h3>Function Component Communication</h3>
      <hr />
      <h4>Props - Father To Child</h4>
      <FatherProps1 />
      <hr />
      <h4>Props - Child to Father</h4>
      <FatherProps2 />
      <hr />
      <h4>Cross Level</h4>
      <FatherLevel />
      <hr />
      <h4>Sibling 1</h4>
      <SiblingFather />
      <br />
      <h4>Sibling 2</h4>
      <Channel />
    </div>
  )
}

export default FunctionCommunication
