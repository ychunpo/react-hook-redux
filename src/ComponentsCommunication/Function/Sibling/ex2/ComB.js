import React from 'react'

function ComB(props) {
  const onButtonClick = () => {
    props.setStateA(props.stateB);
  }

  const onResetButtonClick = () => {
    props.setStateB("B");
  };

  return (
    <>
      <div>{props.stateB}</div>
      <button onClick={onButtonClick}>A change to B</button>
      <button onClick={onResetButtonClick}>還原為B</button>
    </>
  )
}

export default ComB;
