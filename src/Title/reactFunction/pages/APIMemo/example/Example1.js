import React, { useState, memo } from "react";

const Example1 = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div className='example-container'>
      <button onClick={() => setStep(step + 1)}>
        step : {step}
      </button>
      <button onClick={() => setCount(count + 1)}>
        count : {count}
      </button>
      <button onClick={() => setNumber(count + step)}>
        number : {number}
      </button>
      <hr />
      <Child step={step} count={count} number={number} />
      <hr />
      <ChildMemo step={step} count={count} number={number} />
    </div>
  );
};

const Child = (props) => {
  console.log('Child re-render');
  return <p>(Child number) is: {props.number}</p>;
}

const isEqual = (prevProps, nextProps) => {
  if (prevProps.number !== nextProps.number) {
    return false;
  }
  return true;
};

const ChildMemo = memo((props) => {
  console.log('ChildMemo re-render');
  return <p>(Child Memo) number is: {props.number}</p>;
}, isEqual);

export default Example1;
