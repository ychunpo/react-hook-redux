import React, { useState, useRef } from 'react'

function TextInputWithFocusButton() {
  //const inputEl = createRef();
  const inputEl = useRef();

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <React.Fragment>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </React.Fragment>
  );
}

const Example2 = props => {
  const [count, setCount] = useState(0)
  return <div>
    {count}
    <TextInputWithFocusButton />
    <button onClick={() => setCount(count + 1)}>count+1</button>
  </div>
}

export default Example2;