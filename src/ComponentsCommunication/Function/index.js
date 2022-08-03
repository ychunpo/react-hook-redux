import React from 'react';
import './index.css';
import FatherProps1 from './props/FatherToChild/ex1/FatherProps1';
import FatherProps2 from './props/ChildToFather/ex1/FatherProps1';
import FatherLevel from './CrossLevel/FatherLevel';
import SiblingFather from './Sibling/ex1/SiblingFather';
import Channel from './Sibling/ex2/Channel';
import Father2 from './props/ChildToFather/ex2/Father2';
import Father3 from './props/ChildToFather/ex3/Father3';

function FunctionCommunication() {
  return (
    <div id='react-function' className='fc-container'>
      <div className="fc-title">
        <h3>Function Component Communication: </h3>
      </div>

      <ul>
        <li>
          <div className="fc-item">
            <h4>Props - Father To Child:</h4>
            <h5>Example 1</h5>
            <FatherProps1 />
          </div>
        </li>
        <hr />
        <li>
          <div className="fc-item">
            <h4>Props - Child to Father:</h4>
            <h5>Example 1</h5>
            <FatherProps2 />
            <hr />
            <h5>Example 2</h5>
            <Father2 />
            <hr />
            <h5>Example 3</h5>
            <Father3 />
          </div>
        </li>
        <hr />
        <li>
          <div className="fc-item">
            <h4>Cross Level:</h4>
            <h5>Example 1</h5>
            <FatherLevel />
          </div>
        </li>
        <hr />
        <li>
          <div className="fc-item">
            <h4>Sibling:</h4>
            <h5>Example 1</h5>
            <SiblingFather />
            <hr />
            <h5>Example 2</h5>
            <Channel />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FunctionCommunication;
