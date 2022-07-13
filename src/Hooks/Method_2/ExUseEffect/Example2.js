import React from 'react';

/**
 * 和用 Hooks 同等效果类的例子
 * 注意生命周期方法的使用方法和位置
 */
class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  // 首次挂载后执行。
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times （first time）`;
    console.log(document.title);
  }
  // 重新渲染后每次执行。
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times2`;
    console.log(document.title);
  }

  render() {
    return (
      <div>
        <h3>Example-2</h3>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 2 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example2;