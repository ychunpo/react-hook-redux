import { useRef, forwardRef, useState } from "react";

const Example1 = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();

  }

  return (
    <div className='example-container'>
      <h3>Example: 1</h3>
      <Child ref={inputRef} />
      <br />
      <br />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  //console.log('ref', ref);
  //console.log('props', props);
  return (
    <input type="text" ref={ref} />
  )
});

export default Example1;
