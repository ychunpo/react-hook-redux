import React, { useState, useEffect } from 'react';

const SideEffectTest = () => {
  const [count, setCount] = useState(0);
  const [greet, setGreet] = useState('欢迎！');

  const setCountAndGreet = () => {
    setCount(10);
    setGreet('welcome');
  }

  console.log('触发渲染');

  const countInDOM = document.getElementById('count')?.innerHTML;
  console.log(`触发函数时 count 为 ${countInDOM}`);

  useEffect(() => {
    const countInDOM = document.getElementById('count')?.innerHTML;
    console.log(`effect 触发时 count 为 ${countInDOM}`);
  });

  useEffect(() => {
    console.log('触发欢迎语改变的副作用');
  }, [greet]);

  return (
    <div >
      {count} --- {greet}
      <div id="count" >{count}</div>
      <div>{greet}</div>

      <button onClick={() => setCount(1)} >按钮 1 </button>
      <button onClick={() => setCount((value) => value)} >按钮 2</button>
      <button onClick={setCountAndGreet} >按钮 3</button>
      <button onClick={() => setCount(4)} >按钮 4</button>
      <button onClick={() => setGreet('Hello Welcome！')} >按钮 5</button>
    </div>
  )
}

export default SideEffectTest;