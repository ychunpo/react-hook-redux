import React from 'react';
//import CounterApp from './CounterApp';
import Example1 from './Example1';
import Example2 from './Example2';
import GithubUsers from './GithubUsers';

/**
 * 知识点：
 *   - 什么是 Effect 副作用。
 *   - 简单的 Effect 执行方式。
 *   - Effect 函数每次都会执行，如何限制。
 *   - 同等的 class 的例子。
 *   - 注意和 生命周期函数的执行时间做比较。
 */

/*
useEffect(effect)   告诉 React 在渲染后要做些什么。 
类似与：componentDidMount，componentDidUpdate

React（代码内部）将记住传递的函数(我们将把它称为 “effect” )，
然后在执行DOM更新后调用它。在本案例中，我们设置了文档标题，
但我们也可以执行数据获取或调用其他命令式API。
*/

const ExUseEffect = () => {
  return (
    <>
      <h2>Example - UseEffect</h2>
      <Example1 />
      <hr />
      <Example2 />
      <hr />
      <GithubUsers />
      <hr />

    </>
  )
}

export default ExUseEffect;