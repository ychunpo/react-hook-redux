import React, { Component, useCallback, memo } from 'react'
import { Button } from 'antd'

/**
 * 知识点：
 *   - Foo 类组件 没有使用箭头函数。重新生成了多个函数。
 *   - Foo1 类组件中用 bind 绑定this，只有一个函数
 *   - Foo2 函数组件反复生成了多个 handleClick
 *   - Foo3 函数组件用 useCallback 避免了重复生成 handleClick
 * 
 *   - 通过 useCallback 避免 Parent 重新渲染。优化了性能。
 */

class Foo extends Component {
  handleClick() {
    console.log('Foo Click happened');
  }
  render() {
    return <Button onClick={() => this.handleClick()}>Foo Click Me</Button>;
  }
}

class Foo1 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Foo1 Click happened');
  }
  render() {
    return <Button onClick={this.handleClick}>Foo1 Click Me</Button>;
  }
}
/*
Assuming <Button> is implemented as a PureComponent, 
the first way will cause <Button> to re-render every time <Foo> re-renders because a new function is created in every render() call. 
In the second way, the handleClick method is only created once in <Foo>'s constructor and reused across renders.
If we translate both approaches to functional components using hooks, these are the equivalents (sort of):
*/
function Foo2() {
  const handleClick = () => {
    console.log('Foo2 Click happened');
  }
  return <Button onClick={handleClick}>Foo2 Click Me</Button>;
}

function Foo3() {
  const memoizedHandleClick = useCallback(
    () => console.log('Foo3 Click happened'), []
  ); // Tells React to memoize regardless of arguments. 空数组始终记住
  return <Button onClick={memoizedHandleClick}>Foo3 Click Me</Button>;
}

// React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。
// 组件仅在它的 props 发生改变的时候进行重新渲染
const Parent = memo(({ a, c }) => {
  { console.log("Parent 渲染！") }
  return <div>
    a:{a}
    <button onClick={c}>点击</button>
  </div>
})

const Example2 = props => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  //const memoHandleClick = ()=>console.log("click");
  const memoHandleClick = useCallback(() => console.log("click"), []);
  return (
    <div>
      <Foo />
      <Foo1 />
      <Foo2 />
      <Foo3 />
      <hr />
      {console.log('App 渲染')}
      <Parent a={a} c={memoHandleClick} />
      <button onClick={() => setA(a + 1)}>改变a</button>
      <button onClick={() => setB(b + 1)}>改变b</button>
      <button onClick={memoHandleClick}>click</button>
    </div>
  )
}

export default Example2;