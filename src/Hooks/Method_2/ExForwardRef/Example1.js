import React, { forwardRef, createRef, useCallback } from 'react'

/**
 * 知识点：
 *   - forwardRef 的基础概念，返回一个组件。
 *   - 把他收到的 ref 转发给 子组件。
 * 
 * 转发refs 不常用
 * Ref 转发是一种自动将 ref 通过组件传递给子组件的技术
 * 
 * Ref 转发是一种选择性加入的功能，可让某些组件接收他们收到的 ref，
 * 并将其向下传递（换句话说，“转发”）给孩子。
 * http://react.html.cn/docs/forwarding-refs.html
 */

/**
 * 可以转发
 */
const FancyButton1 = forwardRef((props, ref) => (
  <div>
    <h4>FancyButton1</h4>
    <input ref={ref} />
    <button className="FancyButton">
      {props.children}
    </button>
  </div>
));

// 普通组件做不到。
const FancyButton = props => (
  <div>
    <h4>FancyButton</h4>
    <input ref={props.ref} />
    <button className="FancyButton">
      {props.children}
    </button>
  </div>
)

function Example1() {
  const ref = createRef();
  const ref1 = createRef();

  const handleClick = useCallback(
    () => ref.current.focus(), [])

  const handleClick1 = useCallback(
    () => ref1.current.focus(), [])

  return <div>
    <FancyButton ref={ref}>Click me!</FancyButton>
    <button onClick={handleClick}>获得焦点</button>
    <FancyButton1 ref={ref1}>Click me!</FancyButton1>
    <button onClick={handleClick1}>获得焦点</button>
  </div>
}

export default Example1;