
/**
 * useRecucer 的理解
 * 
 * 每个 reducer 都要返回一个有效的状态值。或者抛出错误。
 * 输入旧 state 根据 action 返回新 state。这就是 reducer 的作用。
 * 参考官网：http://react.html.cn/docs/hooks-reference.html#usereducer
 */

const initialState = { count: 0 };

/**
 * 输入旧state 根据 action 返回新 state。这就是 reducer 的作用。
 * @param {*} state   输入的 state
 * @param {*} action  根据action 返回新的 state
 */
function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default reducer;