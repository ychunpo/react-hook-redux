import { useState, useEffect } from 'react';

function Example1() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You --- clicked ${count} times`;
  //   console.log('click')
  // });

  // 我们看到 只要有重新渲染，就会执行所有 useEffect 他并不是订阅了 count 和 
  // mobx autorun reaction 不同。
  // 它与 React 类中的 componentDidMount，componentDidUpdate，
  // 和 componentWillUnmount 有相同的功能，但是统一为单个 API
  // 通过一个空数组，可以只执行一次。相当于 componentDidMount
  useEffect(() => {
    console.log("我只渲染一次！");
  }, [])
  return (
    <div>
      <h3>Example-1</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count)}>不变</button>
    </div>
  );
}

export default Example1;