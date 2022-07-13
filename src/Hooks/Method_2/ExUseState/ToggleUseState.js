import React from 'react';

/**
 * 本例知识点：
 * 1) useState 的基本使用。
 * 2）hooks 解决的问题。renderProps 和 hooks 的比较。彻底理解 hooks 的价值和优点。
 * 
 * 
 * 本例出处：https://github.com/dt-fe/weekly/blob/master/79.%E7%B2%BE%E8%AF%BB%E3%80%8AReact%20Hooks%E3%80%8B.md
 * 
 * Toggle 是 react-powerplug 这个第三方库，就是一个 renderProps 工具库。可以参考：
 * http://rena.to/react-powerplug/#/docs-components-counter
 * https://github.com/dt-fe/weekly/blob/master/75.%E7%B2%BE%E8%AF%BB%E3%80%8AEpitath%20%E6%BA%90%E7%A0%81%20-%20renderProps%20%E6%96%B0%E7%94%A8%E6%B3%95%E3%80%8B.md
 * 在这里，我们自己实现他。
 */

class ToggleUseState extends React.Component {
  state = { on: false }
  constructor(props) {
    super(props);
    this.state.on = this.props.initial;
  }
  toggle = () => {
    this.setState({ on: !this.state.on })
  }
  render() {
    return this.props.children(this.state.on, this.toggle);
  }
}

export default ToggleUseState;