import React from 'react';

class Example1 extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <h3>Example-1</h3>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example1;