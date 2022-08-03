import React, { useState } from 'react';
import ComA from './ComA';
import ComB from './ComB';
import './sibling-ex2.css'

function Channel() {
  const [stateA, setStateA] = useState("A");
  const [stateB, setStateB] = useState("B");

  return (
    <>
      <ComA stateA={stateA} setStateB={setStateB} setStateA={setStateA} />
      <hr />
      <ComB stateB={stateB} setStateA={setStateA} setStateB={setStateB} />
    </>
  )
}

export default Channel
