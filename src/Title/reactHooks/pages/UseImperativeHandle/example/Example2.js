import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react'

const Example2 = () => {
  const buttonRef = useRef(null);

  const handleToggleDisabled = () => {
    buttonRef.current.toggleDisabled();
  }

  const handleGetCount = () => {
    const count = buttonRef.current.count;
    console.log('count: ', count);
  }

  return (
    <div className="example-container">
      <h3>Example: 2</h3>
      <ChildButton ref={buttonRef} />
      <button onClick={handleToggleDisabled}>toggle disable</button>
      <button onClick={handleGetCount}>get count</button>
    </div>
  );
}

const ChildButton = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useImperativeHandle(ref, () => ({
    count,
    toggleDisabled() {
      setIsDisabled((disabled) => !disabled);
    }
  }));

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      Child Button
    </button>
  );
});

export default Example2;




