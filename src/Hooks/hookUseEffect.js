import React from "react";
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
    console.log('click')
  });

  useEffect(() => {
    console.log('Render One Time!')
  }, []);

  return (
    <div>
      <div>You Clicked {count} times</div>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  componentDidMount() {
    document.title = `You Clicked ${this.state.count} times (first time)`;
    console.log(document.title);
  }

  render() {
    return (
      <div>
        <span>You Clicked {this.state.count} times</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
      </div>
    );
  }
}

function GithubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="section">
      {console.log("Render Two Time!")}
      {users.map(user => (
        <div key={user.id} className="card" >
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  );
}

const HookUseEffect = props => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}<button onClick={() => setCount(count + 1)}>count+1</button>
      <Example />
      <hr />
      <Example1 />
      <hr />
      <GithubUsers />
    </div>
  );
}

export default HookUseEffect;