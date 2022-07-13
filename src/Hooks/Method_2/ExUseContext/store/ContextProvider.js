import React, { useReducer } from "react";
import reducer from './reducer';

const theContext = React.createContext();

/**
 * ContextProvider 
 * 1) 对 theContext 进行了封装。实质上还是提供 context 的功能。
 * 2) 把 state 和 dispatch 提供给所有的 props.children
 * 理解为：给 children 注入了 类似redux reducer 的机制。其实就是
 * 通过 dispatch 一个 action 返回一个新的 state
 * 
 * useReducer
 */
const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <theContext.Provider value={{ state, dispatch }}>
      {props.children}
    </theContext.Provider>
  );
};

export { theContext, ContextProvider };