import React from 'react'

function ComA(props) {
  const onButtonClick = () => {
    props.setStateB(props.stateA);
  };

  const onResetButtonClick = () => {
    props.setStateA("A");
  };

  return (
    <>
      <div>{props.stateA}</div>
      <button onClick={onButtonClick}>B change to A</button>
      <button onClick={onResetButtonClick}>還原為A</button>
    </>
  )
}

export default ComA
